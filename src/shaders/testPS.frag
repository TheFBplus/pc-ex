precision mediump float;

varying vec2 vUv0;

uniform sampler2D uColorBuffer;

void main() {
  vec4 color = texture2D(uColorBuffer, vUv0);
  gl_FragColor = vec4(color.rgb, 1.0);
}