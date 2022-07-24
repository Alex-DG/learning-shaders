
uniform vec4 colour1;
uniform vec4 colour2;

varying vec2 vUv;

void main() {
    gl_FragColor = mix(
        colour1, 
        colour2, 
        vUv.x
    );
}