uniform sampler2D diffuse;
uniform sampler2D overlay;
uniform vec4 tint; 

varying vec2 vUv;

void main() {
    // Base
    // vec4 diffuseSample = texture2D(diffuse, vUv);
    // gl_FragColor = diffuseSample;

    // Flip texture vertically
    // vec2 flipY = 1. - vUv; // Flip Y
    // vec4 diffuseSample = texture2D(diffuse, flipY);

    // gl_FragColor = vec4(diffuseSample.r, 0.,0., 1.0); // red filter
    // gl_FragColor = 1. - diffuseSample; // cool filter

    // vec4 diffuseSample = texture2D(diffuse, vUv);
    // gl_FragColor = diffuseSample * tint; // modulation, getting red filter

    // With Overlay Demo
    // vec4 diffuseSample = texture2D(diffuse, vUv);
    // vec4 overlaySample = texture2D(overlay, vUv);
    // gl_FragColor = mix(diffuseSample, overlaySample, overlaySample.w); // modulation, getting red filter

    // vec2 newUv = vUv * 2.; // RepeatWrapping

    vec2 newUv = vUv / 10.; // zoom

    vec4 diffuseSample = texture2D(diffuse, newUv);
    gl_FragColor = diffuseSample;
}
