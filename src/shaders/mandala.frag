precision mediump float;

uniform float time;
uniform vec2 resolution;

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    uv = uv * 2.0 - 1.0;
    float r = length(uv);
    float a = atan(uv.y, uv.x);
    
    float mandala = sin(10.0 * a + time * 0.5) * 0.5 + 0.5;
    mandala *= exp(-r * 2.0);
    
    vec3 color = vec3(mandala * 1.2, mandala * 0.6, 0.1);
    gl_FragColor = vec4(color, 0.4);  // semi-transparent glow
}
