import React, { useEffect, useRef } from "react";
import { Curtains, ShaderPass } from "curtainsjs";

const MandalaShader = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const curtains = new Curtains({
      container: containerRef.current,
      pixelRatio: Math.min(1.5, window.devicePixelRatio),
    });

    // Mandala Shader (softer rotation, less bright)
    const mandala = new ShaderPass(curtains, {
      fragmentShader: `
        precision mediump float;
        uniform float time;
        uniform vec2 resolution;
        void main() {
          vec2 uv = gl_FragCoord.xy / resolution.xy;
          uv = uv * 2.0 - 1.0;
          float r = length(uv);
          float a = atan(uv.y, uv.x);
          float mandala = sin(6.0 * a + time * 0.5) * 0.5 + 0.5;
          mandala *= exp(-r * 2.0);
          vec3 color = vec3(mandala * 0.8, mandala * 0.4, 0.1);
          gl_FragColor = vec4(color, 0.25); // softer, less bright
        }
      `,
      uniforms: {
        time: { name: "time", type: "1f", value: 0 },
        resolution: { name: "resolution", type: "2f", value: [window.innerWidth, window.innerHeight] }
      }
    });

    // Lotus/Diya Glow Shader (layered, more transparent)
    const lotusGlow = new ShaderPass(curtains, {
      fragmentShader: `
        precision mediump float;
        uniform float time;
        uniform vec2 resolution;
        void main() {
          vec2 uv = gl_FragCoord.xy / resolution.xy;
          uv = uv * 2.0 - 1.0;
          float r = length(uv);
          float glow = exp(-r * 6.0) * (0.5 + 0.5 * sin(time * 1.2));
          vec3 color = vec3(1.0, 0.7, 0.3) * glow;
          gl_FragColor = vec4(color, 0.12); // very soft glow
        }
      `,
      uniforms: {
        time: { name: "time", type: "1f", value: 0 },
        resolution: { name: "resolution", type: "2f", value: [window.innerWidth, window.innerHeight] }
      }
    });

    const render = () => {
      mandala.uniforms.time.value += 0.02;
      lotusGlow.uniforms.time.value += 0.02;
      requestAnimationFrame(render);
    };

    render();

    return () => {
      curtains.dispose();
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />
    </>
  );
};

export default MandalaShader;