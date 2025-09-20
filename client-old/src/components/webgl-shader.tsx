import { useEffect, useRef } from 'react';

export default function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);

  const vertexShaderSource = `
    attribute vec2 a_position;
    attribute vec2 a_texCoord;
    
    uniform vec2 u_resolution;
    uniform float u_time;
    
    varying vec2 v_texCoord;
    varying float v_time;
    
    void main() {
      vec2 position = ((a_position / u_resolution) * 2.0 - 1.0) * vec2(1, -1);
      gl_Position = vec4(position, 0, 1);
      v_texCoord = a_texCoord;
      v_time = u_time;
    }
  `;

  const fragmentShaderSource = `
    precision mediump float;
    
    uniform vec2 u_resolution;
    uniform float u_time;
    uniform vec2 u_mouse;
    
    varying vec2 v_texCoord;
    varying float v_time;
    
    // Neural network inspired color palette
    vec3 primary = vec3(0.0, 1.0, 1.0);    // Neon Cyan
    vec3 accent = vec3(1.0, 0.42, 0.21);   // Electric Orange
    vec3 neural = vec3(0.54, 0.17, 0.89);  // Violet Purple
    
    // Noise function for organic movement
    float noise(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }
    
    // Smooth noise
    float smoothNoise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      
      float a = noise(i);
      float b = noise(i + vec2(1.0, 0.0));
      float c = noise(i + vec2(0.0, 1.0));
      float d = noise(i + vec2(1.0, 1.0));
      
      vec2 u = f * f * (3.0 - 2.0 * f);
      
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }
    
    // Fractal noise
    float fractalNoise(vec2 st) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 0.0;
      
      for (int i = 0; i < 6; i++) {
        value += amplitude * smoothNoise(st);
        st *= 2.0;
        amplitude *= 0.5;
      }
      
      return value;
    }
    
    // Neural network visualization
    vec3 neuralNetwork(vec2 st, float time) {
      vec2 center = vec2(0.5, 0.5);
      float dist = distance(st, center);
      
      // Create neural nodes
      float node1 = smoothstep(0.1, 0.08, distance(st, vec2(0.3, 0.3)));
      float node2 = smoothstep(0.1, 0.08, distance(st, vec2(0.7, 0.3)));
      float node3 = smoothstep(0.1, 0.08, distance(st, vec2(0.3, 0.7)));
      float node4 = smoothstep(0.1, 0.08, distance(st, vec2(0.7, 0.7)));
      
      // Animate nodes
      node1 *= (sin(time * 2.0) + 1.0) * 0.5;
      node2 *= (sin(time * 2.5) + 1.0) * 0.5;
      node3 *= (sin(time * 3.0) + 1.0) * 0.5;
      node4 *= (sin(time * 1.5) + 1.0) * 0.5;
      
      // Create connections
      float connection1 = smoothstep(0.01, 0.005, abs((st.y - 0.3) - (st.x - 0.3) * 0.5));
      float connection2 = smoothstep(0.01, 0.005, abs((st.y - 0.7) - (st.x - 0.3) * 0.5));
      
      // Combine everything
      vec3 color = vec3(0.0);
      color += node1 * primary;
      color += node2 * accent;
      color += node3 * neural;
      color += node4 * primary;
      color += connection1 * primary * 0.3;
      color += connection2 * accent * 0.3;
      
      return color;
    }
    
    // Quantum field effect
    vec3 quantumField(vec2 st, float time) {
      vec2 q = st;
      q.x += fractalNoise(q + time * 0.1) * 0.1;
      q.y += fractalNoise(q + time * 0.15) * 0.1;
      
      float field = fractalNoise(q * 3.0 + time * 0.2);
      field = smoothstep(0.3, 0.7, field);
      
      return mix(neural, primary, field) * field;
    }
    
    void main() {
      vec2 st = gl_FragCoord.xy / u_resolution.xy;
      vec2 mouse = u_mouse / u_resolution.xy;
      
      // Combine different effects
      vec3 neural = neuralNetwork(st, u_time);
      vec3 quantum = quantumField(st, u_time);
      
      // Add mouse interaction
      float mouseDist = distance(st, mouse);
      float mouseEffect = smoothstep(0.3, 0.0, mouseDist);
      
      vec3 color = mix(neural, quantum, 0.5);
      color += mouseEffect * accent * 0.5;
      
      // Add some atmospheric glow
      color += fractalNoise(st * 2.0 + u_time * 0.1) * 0.1;
      
      gl_FragColor = vec4(color, 0.8);
    }
  `;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext;
    if (!gl) {
      console.warn('WebGL not supported');
      return;
    }

    glRef.current = gl;

    // Create shader
    function createShader(type: number, source: string): WebGLShader | null {
      const shader = gl.createShader(type);
      if (!shader) return null;

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    }

    // Create program
    function createProgram(vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram | null {
      const program = gl.createProgram();
      if (!program) return null;

      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program linking error:', gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return null;
      }

      return program;
    }

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    
    if (!vertexShader || !fragmentShader) return;

    const program = createProgram(vertexShader, fragmentShader);
    if (!program) return;

    // Create geometry
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
       1,  1,
    ]);

    const texCoords = new Float32Array([
      0, 0,
      1, 0,
      0, 1,
      1, 1,
    ]);

    // Create buffers
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, texCoords, gl.STATIC_DRAW);

    // Get attribute and uniform locations
    const positionLocation = gl.getAttribLocation(program, 'a_position');
    const texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const mouseLocation = gl.getUniformLocation(program, 'u_mouse');

    // Animation loop
    let startTime = Date.now();
    let mouseX = 0;
    let mouseY = 0;

    const animate = () => {
      const currentTime = Date.now();
      const time = (currentTime - startTime) / 1000;

      // Update canvas size
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);

      // Clear
      gl.clearColor(0.04, 0.055, 0.102, 1.0); // Deep Space Blue
      gl.clear(gl.COLOR_BUFFER_BIT);

      // Use program
      gl.useProgram(program);

      // Set uniforms
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, time);
      gl.uniform2f(mouseLocation, mouseX, mouseY);

      // Set attributes
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
      gl.enableVertexAttribArray(texCoordLocation);
      gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);

      // Draw
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      requestAnimationFrame(animate);
    };

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(positionBuffer);
      gl.deleteBuffer(texCoordBuffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
      style={{ zIndex: -1 }}
    />
  );
}
