uniform sampler2D diffuse;
uniform vec4 tint; 

varying vec2 vUv;

void main() {
    // Flip texture vertically
    // vec2 flipY = 1. - vUv; // Flip Y
    // vec4 diffuseSample = texture2D(diffuse, flipY);

    // gl_FragColor = vec4(diffuseSample.r, 0.,0., 1.0); // red filter
    // gl_FragColor = 1. - diffuseSample; // cool filter

    vec4 diffuseSample = texture2D(diffuse, vUv);
    gl_FragColor = diffuseSample * tint; // modulation, getting red filter
}
