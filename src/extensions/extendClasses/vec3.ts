import * as pc from "playcanvas";

let _glPos = new pc.Vec4();
let _worldPos = new pc.Vec4();
let _matrix_PV = new pc.Mat4();

let _eventPos = new pc.Vec2();

let _axis = new pc.Vec3();
var _vH = new pc.Vec3();
var _vV = new pc.Vec3();
var _vV2 = new pc.Vec3();

declare module 'playcanvas' {
    export interface Vec3
    {
        /**
         * @description: 此三维向量对应的可传入shader的数据
         */
        shaderData: Float32Array;

        /**
        * @description: 根据此3维向量的朝向获得rotation
        */
        rotation: Quat;

        /**
         * @description: 放缩此3维向量
         * @param {number} scaler 放缩倍数
         * @return {Vec3} 原向量
         */
        scale(scaler: number): Vec3;

        /**
         * @description: 根据物体的世界坐标获得标准化gl坐标
         * @param {CameraComponent} camera 当前相机
         * @return {Vec4} 标准化gl坐标
         */
        getGLPos(camera?: CameraComponent): Vec4;

        /**
         * @description: 获得此3维向量对应在屏幕点击坐标系中的位置
         * @return {Vec2} 点击位置
         */
        getInputEventPos(): Vec2;

        /**
         * @description: 将此3维向量沿x轴旋转一定角度
         * @see https://www.cheapface.top/index.php/archives/19/ 二维向量的旋转
         * @param {number} angle 旋转角度
         * @return {Vec3} 原向量
         */
        rotateX(angle: number): Vec3;

        /**
        * @description: 将此3维向量沿y轴旋转一定角度
        * @see https://www.cheapface.top/index.php/archives/19/ 二维向量的旋转
        * @param {number} angle 旋转角度
        * @return {Vec3} 原向量
        */
        rotateY(angle: number): Vec3;

        /**
        * @description: 将此3维向量沿z轴旋转一定角度
        * @see https://www.cheapface.top/index.php/archives/19/ 二维向量的旋转
        * @param {number} angle 旋转角度
        * @return {Vec3} 原向量
        */
        rotateZ(angle: number): Vec3;

        /**
         * @description: 令该3维向量沿某方向轴旋转一定角度
         * @see https://www.cheapface.top/index.php/archives/57/ 绕任意轴旋转3维向量（活用矢量分解与合成）
         * @param {Vec3} axis 旋转轴
         * @param {number} angle 旋转角度
         * @return {Vec3} 原向量
         */
        rotateAxisAngle(axis: Vec3, angle: number): Vec3;
    }
}

/**
 * @description: 此三维向量对应的可传入shader的数据
 */
Object.defineProperty(pc.Vec3.prototype, "shaderData", {
    get: function ()
    {
        if (!this._shaderData)
        {
            this._shaderData = new Float32Array(3);
        }
        this._shaderData[0] = this.x;
        this._shaderData[1] = this.y;
        this._shaderData[2] = this.z;

        return this._shaderData;
    },
    configurable: true
});

/**
* @description: 根据此3维向量的朝向获得rotation
*/
Object.defineProperty(pc.Vec3.prototype, "rotation", {
    get: function ()
    {
        if (!this._rotation)
        {
            this._rotation = new pc.Quat();
        }

        this._rotation.setLookRotation(pc.Vec3.ZERO, this, pc.Vec3.UP);

        return this._rotation;
    },
    configurable: true
});

try
{
    // 在场景初始化完成之后再进行操作
    (pc as any).app.once("start", function ()
    {
        const _app = pc.Application.getApplication();
        const _device = _app.graphicsDevice;
        const _camera = _app.root.findComponent("camera") as pc.CameraComponent;

        /**
         * @description: 根据物体的世界坐标获得标准化gl坐标
         * @param {CameraComponent} camera 当前相机
         * @return {Vec4} 标准化gl坐标
         */
        pc.Vec3.prototype.getGLPos = function (camera?: pc.CameraComponent): pc.Vec4
        {
            // 设置当前相机
            let currentCamera = camera || _camera;
            // 根据相机参数计算试图投影矩阵
            _worldPos.set(this.x, this.y, this.z, 1);
            _matrix_PV.mul2(currentCamera.projectionMatrix, currentCamera.viewMatrix);
            _matrix_PV.transformVec4(_worldPos, _glPos);
            return _glPos.set(_glPos.x / _glPos.w, _glPos.y / _glPos.w, _glPos.z / _glPos.w, 1);
        }

        /**
         * @description: 获得此3维向量对应在屏幕点击坐标系中的位置
         * @return {Vec2} 点击位置
         */
        pc.Vec3.prototype.getInputEventPos = function (): pc.Vec2
        {
            const glPos = this.getGLPos();
            const deviceWidth = _device.canvas.clientWidth;
            const deviceHeight = _device.canvas.clientHeight;
            if ((window as any).isForceLandscape)
                _eventPos.set((glPos.y * 0.5 + 0.5) * deviceHeight - deviceHeight, (glPos.x * 0.5 + 0.5) * deviceWidth);
            else
                _eventPos.set((glPos.x * 0.5 + 0.5) * deviceWidth, deviceHeight - (glPos.y * 0.5 + 0.5) * deviceHeight);

            return _eventPos;
        }

        /**
        * @description: 将此3维向量沿x轴旋转一定角度
        * @see https://www.cheapface.top/index.php/archives/19/ 二维向量的旋转
        * @param {number} angle 旋转角度
        * @return {Vec3} 原向量
        */
        pc.Vec3.prototype.rotateX = function (angle: number): pc.Vec3
        {
            const cosTheta = Math.cos(angle * pc.math.DEG_TO_RAD);
            const sinTheta = Math.sin(angle * pc.math.DEG_TO_RAD);
            const y = cosTheta * this.y - sinTheta * this.z;
            const z = sinTheta * this.y + cosTheta * this.z;
            return this.set(this.x, y, z);
        }

        /**
        * @description: 将此3维向量沿y轴旋转一定角度
        * @see https://www.cheapface.top/index.php/archives/19/ 二维向量的旋转
        * @param {number} angle 旋转角度
        * @return {Vec3} 原向量
        */
        pc.Vec3.prototype.rotateY = function (angle: number): pc.Vec3
        {
            const cosTheta = Math.cos(angle * pc.math.DEG_TO_RAD);
            const sinTheta = Math.sin(angle * pc.math.DEG_TO_RAD);
            const x = cosTheta * this.x + sinTheta * this.z;
            const z = - sinTheta * this.x + cosTheta * this.z;
            return this.set(x, this.y, z);
        }

        /**
        * @description: 将此3维向量沿z轴旋转一定角度
        * @see https://www.cheapface.top/index.php/archives/19/ 二维向量的旋转
        * @param {number} angle 旋转角度
        * @return {Vec3} 原向量
        */
        pc.Vec3.prototype.rotateZ = function (angle: number): pc.Vec3
        {
            const cosTheta = Math.cos(angle * pc.math.DEG_TO_RAD);
            const sinTheta = Math.sin(angle * pc.math.DEG_TO_RAD);
            const x = cosTheta * this.x - sinTheta * this.y;
            const y = sinTheta * this.x + cosTheta * this.y;
            return this.set(x, y, this.z);
        }

        /**
        * @description: 令该3维向量沿某方向轴旋转一定角度
        * @see https://www.cheapface.top/index.php/archives/57/ 绕任意轴旋转3维向量（活用矢量分解与合成）
        * @param {Vec3} axis 旋转轴
        * @param {number} angle 旋转角度
        * @return {Vec3} 原向量
        */
        pc.Vec3.prototype.rotateAxisAngle = function (axis: pc.Vec3, angle: number): pc.Vec3
        {
            const radius = angle * pc.math.DEG_TO_RAD; // 转化角度为弧度制
            _axis.copy(axis).normalize(); // 归一化旋转轴
            _vH.copy(_axis).scale(this.dot(_axis)); // 获得向量平行于旋转轴的分量，此分量不随旋转而改变
            _vV.sub2(this, _vH); // 获得向量垂直于旋转轴的分量，此分量在垂直于旋转轴的平面上旋转
            _axis.cross(_axis, _vV); // 获得垂直于旋转轴的新轴
            _vV2.add2(_vV.scale(Math.cos(radius)), _axis.scale(Math.sin(radius))); // 获得垂直分量旋转后的新向量(求单位向量时需除以旋转向量长度，求分量长度时要乘以长度，故此处消去了长度的计算)
            return this.add2(_vH, _vV2);
        }
    });
} catch (error)
{

}