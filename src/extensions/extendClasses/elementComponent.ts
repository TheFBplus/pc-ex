import * as pc from "playcanvas";

let _temp = new pc.Vec3();
let _temp1 = new pc.Vec3();
let _temp2 = new pc.Vec3();
let _temp3 = new pc.Vec4();

let _ETC = new pc.Vec3();
let _rect = new pc.Vec4();

let _ray = new pc.Ray();
let _hitPoint = new pc.Vec3();
let _toVec = new pc.Vec3();
let _project = new pc.Vec3();
let _axisX = new pc.Vec3();
let _axisY = new pc.Vec3();
let _uv = new pc.Vec2();

let _screenPosition = new pc.Vec3();

/**
 * @description: 判断点是否在矩形内
 * @param {Vec3} point 需判断的点
 * @param {Vec4} rect 矩形区域：x:起点横坐标，y:起点纵坐标，z：矩形宽度，w：矩形高度
 * @return {boolean} 点是否在矩形内部
 */
function isOutRect(point: pc.Vec2 | pc.Vec3 | pc.Vec4, rect: pc.Vec4): boolean
{
    if ((window as any).isForceLandscape)
        return point.x < rect.x || point.x > rect.w || point.y < rect.y || point.y > rect.z;
    else
        return point.x < rect.x || point.x > rect.z || point.y < rect.y || point.y > rect.w;
}

/**
 * @description: 根据点击位置获得uv
 * @param {[Vec3, Vec3, Vec3, Vec3]}} corners 图片4个角的屏幕坐标
 * @param {any} point 点击点
 * @return {Vec2} uv
 */
function calculateUV(corners: [pc.Vec3, pc.Vec3, pc.Vec3, pc.Vec3], point: any): pc.Vec2
{
    let x, y;
    if ((window as any).isForceLandscape) {
        x = pc.math.clamp((point.y - corners[0].y) / (corners[1].y - corners[0].y), 0, 1);
        y = pc.math.clamp((point.x - corners[0].x) / (corners[2].x - corners[0].x), 0, 1);
    }
    else {
        point.y = (pc as any).app.graphicsDevice.canvas.clientHeight - point.y;
        x = pc.math.clamp((point.x - corners[0].x) / (corners[1].x - corners[0].x), 0, 1);
        y = pc.math.clamp((point.y - corners[0].y) / (corners[2].y - corners[0].y), 0, 1);
    }

    _uv.set(x, y);
    return _uv;
};

function calculateWorldUV(ray: pc.Ray, corners: pc.Vec3[]): pc.Vec2
{
    let x = 0;
    let y = 0;
    const width = corners[0].distance(corners[1]);
    const height = corners[0].distance(corners[3]);
    _axisX.sub2(corners[1], corners[0]).normalize();
    _axisY.sub2(corners[3], corners[0]).normalize();
    if (ray.intersectTriangle(corners[0], corners[1], corners[2], false, _hitPoint)) {
        _toVec.sub2(_hitPoint, corners[0]);
    }
    else if (ray.intersectTriangle(corners[2], corners[3], corners[0], false, _hitPoint)) {
        _toVec.sub2(_hitPoint, corners[0]);
    }
    else {
        _uv.set(x, y);
        return _uv;
    }

    _project.copy(_toVec);
    _project.project(_axisX);
    x = _project.length() / width;

    _project.copy(_toVec);
    _project.project(_axisY);
    y = _project.length() / height;

    _uv.set(x, y);
    return _uv;
}

declare module 'playcanvas' {
    export interface ElementComponent
    {
        /**
         * @description: 此element的包围盒
         */
        aabb: any;

        /**
        * @description: 此二维向量对应的可传入shader的数据
        */
        calculatedCorners: [Vec3, Vec3, Vec3, Vec3];

        /**
         * @description: 获得element的4个角的屏幕坐标
         * @return {[Vec3, Vec3, Vec3, Vec3]} 4个角的屏幕坐标数组
         */
        getScreenCorners(): [Vec3, Vec3, Vec3, Vec3];

        /**
         * @description: 判断该element是否在屏幕上
         * @param {CameraComponent} camera 当前相机
         * @return {boolean} 是否在屏幕上
         */
        isOnScreen(camera?: CameraComponent): boolean

        /**
         * @description: 获得点击处的透明度
         * @param {any} point 点击事件
         * @return {number} 透明度
         */
        getAlphaOnHitPoint(point: any): number;

        /**
         * @description: 根据世界坐标设置该element的屏幕坐标
         * @param {Vec3} pos 世界坐标
         * @param {CameraComponent} camera 当前相机
         */
        setPosFromWorld(pos: Vec3, camera?: CameraComponent): void;
    }
}

try {
    // 在场景初始化完成之后再进行操作
    (pc as any).app.once("start", function ()
    {
        const _app = pc.Application.getApplication();
        const _device = _app.graphicsDevice;
        const _camera = _app.root.findComponent("camera") as pc.CameraComponent;

        /**
         * @description: 判断该element是否在屏幕上
         * @param {CameraComponent} camera 当前相机
         * @return {boolean} 是否在屏幕上
         */
        pc.ElementComponent.prototype.isOnScreen = function (camera?: pc.CameraComponent): boolean
        {
            // 设置当前相机
            let currentCamera = camera || _camera;

            // 若该element在相机后面则无法看见，返回false
            if (currentCamera.entity.forward.dot(_ETC.sub2(this.aabb.center, currentCamera.entity.getPosition()).normalize()) <= 0)
                return false;

            // 获得该element的4个边界的屏幕坐标
            const corners = this.getScreenCorners();
            const deviceWidth = _device.canvas.clientWidth;
            const deviceHeight = _device.canvas.clientHeight;
            _rect.set(0, 0, deviceWidth, deviceHeight);

            // 当且仅当所有边界点都在屏幕外时，判定该element在屏幕外
            return !(isOutRect(corners[0], _rect) && isOutRect(corners[1], _rect) && isOutRect(corners[2], _rect) && isOutRect(corners[3], _rect));
        }

        /**
        * @description: 获得element的4个角的屏幕坐标
        * @return {[Vec3, Vec3, Vec3, Vec3]} 4个角的屏幕坐标数组
        */
        pc.ElementComponent.prototype.getScreenCorners = function (): [pc.Vec3, pc.Vec3, pc.Vec3, pc.Vec3]
        {
            // 初始化数据
            if (!this.calculatedCorners) {
                this.calculatedCorners = [new pc.Vec3(), new pc.Vec3(), new pc.Vec3(), new pc.Vec3()];
            }

            // 若该element在屏幕上，直接取值，无需计算
            if (this.screen) {
                for (let i = 0; i < 4; i++) {
                    this.calculatedCorners[i].copy(this.screenCorners[i]);
                }
            }
            // 获得该element的4个角的世界坐标
            else {
                const entity = this.entity;
                const world_center = this.aabb.center;
                const halfWorld_width = this.aabb.halfExtents.x;
                const halfWorld_height = this.aabb.halfExtents.y;

                _temp.add2(_temp1.copy(entity.right).scale(- halfWorld_width), _temp2.copy(entity.up).scale(- halfWorld_height));
                this.calculatedCorners[0].add2(world_center, _temp);

                _temp.add2(_temp1.copy(entity.right).scale(halfWorld_width), _temp2.copy(entity.up).scale(- halfWorld_height));
                this.calculatedCorners[1].add2(world_center, _temp);

                _temp.add2(_temp1.copy(entity.right).scale(halfWorld_width), _temp2.copy(entity.up).scale(halfWorld_height));
                this.calculatedCorners[2].add2(world_center, _temp);

                _temp.add2(_temp1.copy(entity.right).scale(- halfWorld_width), _temp2.copy(entity.up).scale(halfWorld_height));
                this.calculatedCorners[3].add2(world_center, _temp);
            }

            // 转换世界坐标为屏幕坐标
            const deviceWidth = _device.canvas.clientWidth;
            const deviceHeight = _device.canvas.clientHeight;
            for (let i = 0; i < 4; i++) {
                _temp3.copy(this.calculatedCorners[i].getGLPos());
                if ((window as any).isForceLandscape)
                    this.calculatedCorners[i].set((_temp3.y * 0.5 + 0.5) * deviceHeight, (_temp3.x * 0.5 + 0.5) * deviceWidth, 1);
                else
                    this.calculatedCorners[i].set((_temp3.x * 0.5 + 0.5) * deviceWidth, (_temp3.y * 0.5 + 0.5) * deviceHeight, 1);
            }

            return this.calculatedCorners;
        }

        /**
         * @description: 获得点击处的透明度
         * @param {any} point 点击事件
         * @return {number} 透明度
         */
        pc.ElementComponent.prototype.getAlphaOnHitPoint = function (point: any): number
        {
            // // 获得屏幕uv
            // calculateUV(this.getScreenCorners(), point);

            _camera.screenToWorld((window as any).isForceLandscape ? point.y : point.x, (window as any).isForceLandscape ? -point.x : point.y, _camera.farClip, _ray.direction);
            _ray.origin.copy(_camera.entity.getPosition());
            _ray.direction.sub(_ray.origin).normalize();
            calculateWorldUV(_ray, this.worldCorners);
            // 读取alpha值
            if (this.texture)
                return this.texture.texture2D(_uv).a;
        }

        /**
         * @description: 根据世界坐标设置该element的屏幕坐标
         * @param {Vec3} pos 世界坐标
         * @param {CameraComponent} camera 当前相机
         */
        pc.ElementComponent.prototype.setPosFromWorld = function (pos: pc.Vec3, camera?: pc.CameraComponent): void
        {
            // 若该物体不在屏幕上，则不设置坐标
            if (!this.screen)
                return;

            // 设置当前相机
            let currentCamera = camera || _camera;

            // 计算屏幕坐标
            const scale = (this.screen.screen as any).scale;
            const devicePixelRatio = _device.maxPixelRatio;
            currentCamera.worldToScreen(pos, _screenPosition);
            _screenPosition.x *= devicePixelRatio;
            _screenPosition.y *= devicePixelRatio;

            // 设置该element的位置
            this.entity.setLocalPosition(_screenPosition.x / scale, (_device.height - _screenPosition.y) / scale, 0);
        }
    });
} catch (error) {

}