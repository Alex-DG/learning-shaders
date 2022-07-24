uniform vec4 colour1;
uniform vec4 colour2;

varying vec2 vUv;
varying vec3 vColour;

void main() {
    // vec3 blackToWhite = vec3(vUv.x);
    // vec3 whiteToBlack = 1. - blackToWhite;
    // gl_FragColor = vec4(whiteToBlack, 1.);

    // gl_FragColor = mix(
    //     colour1, 
    //     colour2, 
    //     vUv.x
    // );

    gl_FragColor = vec4(
        vColour,
        1.0
    );
}
