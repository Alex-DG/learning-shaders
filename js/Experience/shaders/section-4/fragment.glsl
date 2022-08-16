
varying vec2 vUv;

uniform vec2 resolution;

vec3 red = vec3(1.0, 0.0, 0.0);
vec3 blue = vec3(0.0, 0.0, 1.0);
vec3 white = vec3(1.0, 1.0, 1.0);
vec3 black = vec3(0.0, 0.0, 0.0);
vec3 yellow = vec3(1.0, 1.0, 0.0);

// Fract
void main() {
  vec3 colour = vec3(0.75);
  // vec3 colour = fract(vec3(vUv, 0.0) * 10.); // grid

    // vec2 cell = fract(vUv * 10.);

    // Grid
    vec2 center = vUv - 0.5;
    vec2 cell = fract(center * resolution / 100.);
    cell = abs(cell - 0.5);
    // float distToCell = max(cell.x, cell.y);
    float distToCell =  1. - 2. * max(cell.x, cell.y);

    float cellLine = smoothstep(0.0, 0.05, distToCell);

    float xAxis = smoothstep(0.0, 0.002, abs(vUv.y - 0.5));
    float yAxis = smoothstep(0.0, 0.002, abs(vUv.x - 0.5));

    // Lines
    vec2 pos = center * resolution / 100.;
    float value1 = pos.x;
    // float value2 = abs(pos.x);
    // float value2 = fract(pos.x);
    // float value2 = floor(pos.x);
    float value2 = mod(pos.x, 1.);
    float functionLine1 = smoothstep(0.0, 0.057, abs(pos.y - value1));
    float functionLine2 = smoothstep(0.0, 0.057, abs(pos.y - value2));

    // vec3 colour = 1. - 2. * vec3(distToCell);
    colour = mix(black, colour, cellLine);
    colour = mix(red, colour, xAxis);
    colour = mix(blue, colour, yAxis);
    colour = mix(yellow, colour, functionLine1);
    colour = mix(red, colour, functionLine2);

    gl_FragColor = vec4(colour, 1.0);
}

// > Min max clamp
// void main() {
//   vec3 colour = vec3(0.0);

//   float value1 = vUv.x;
//   // float value2 = smoothstep(0.0, 1.0, vUv.x);
  
//   // float value2 = min(vUv.x, 0.25);
//   // float value2 = max(vUv.x, 0.75);
//   float value2 = clamp(vUv.x, 0.25, 0.75);

//   float line = smoothstep(0.0, 0.005, abs(vUv.y - 0.5));
//   float linearLine = smoothstep(0.0, 0.0075, abs(vUv.y - mix(0.5, 1.0, value1)));
//   float smoothLine = smoothstep(0.0, 0.0075, abs(vUv.y - mix(0.0, 0.5, value2)));

//   vec3 red = vec3(1.0, 0.0, 0.0);
//   vec3 blue = vec3(0.0, 0.0, 1.0);
//   vec3 white = vec3(1.0, 1.0, 1.0);

//   if (vUv.y > 0.5) {
//     colour = mix(red, blue, value1);
//   } else {
//     colour = mix(red, blue, value2);
//   }

//   colour = mix(white, colour, line);
//   colour = mix(white, colour, linearLine);
//   colour = mix(white, colour, smoothLine);

//   gl_FragColor = vec4(colour, 1.0);
// }

// > Step, Mix, smoothstep
// void main() {
//   vec3 colour = vec3(0.0);

//   float value1 = vUv.x;
//   float value2 = smoothstep(0.0, 1.0, vUv.x);

//   float line = smoothstep(0.0, 0.005, abs(vUv.y - 0.5));
//   float linearLine = smoothstep(0.0, 0.0075, abs(vUv.y - mix(0.5, 1.0, value1)));
//   float linearLine2 = smoothstep(0.0, 0.0075, abs(vUv.y - mix(0.0, 1.0, value1)));
//   float smoothLine = smoothstep(0.0, 0.0075, abs(vUv.y - mix(0.0, 0.5, value2)));

//   vec3 red = vec3(1.0, 0.0, 0.0);
//   vec3 blue = vec3(0.0, 0.0, 1.0);
//   vec3 white = vec3(1.0, 1.0, 1.0);

//   if (vUv.y > 0.5) {
//     colour = mix(red, blue, value1);
//   } else {
//     colour = mix(red, blue, value2);
//   }

//   colour = mix(white, colour, line);
//   colour = mix(white, colour, linearLine);
//   colour = mix(white, colour, linearLine2);
//   colour = mix(white, colour, smoothLine);

//   gl_FragColor = vec4(colour, 1.0);
// }

// void main() {
//   vec3 colour = vec3(0.0);

//   // colour = vec3(vUv.x);

//   // Step
//   // colour = vec3(step(0.5, vUv.x));

//   // Mix 
//   // mix(val1, val2, %)
//   // mix(10., 20., 0.5); -> 15.
//   // colour = mix(red, blue, vUv.x);

//   // Smoothstep
//   // smoothstep(edge0, edge1, x)
//   // colour = vec3(smoothstep(0.0, 1.0, vUv.x));
//   colour = mix(red, blue, smoothstep(0.0, 1.0, vUv.x));

//   gl_FragColor = vec4(colour, 1.0);
// }
