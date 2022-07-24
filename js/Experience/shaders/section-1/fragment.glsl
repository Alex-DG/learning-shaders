
varying vec2 vUv;

void main() {
    vec3 blackToWhite = vec3(vUv.x);
    vec3 whiteToBlack = 1. - blackToWhite;
    gl_FragColor = vec4(whiteToBlack, 1.);
}