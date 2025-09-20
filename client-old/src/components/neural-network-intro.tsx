import { useEffect, useRef, useState } from 'react';
import { Cpu, Activity } from 'lucide-react';

interface NeuralNode {
  id: string;
  x: number;
  y: number;
  type: 'input' | 'hidden' | 'output';
  technology: string;
  active: boolean;
  connections: string[];
}

export default function NeuralNetworkIntro() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [nodes, setNodes] = useState<NeuralNode[]>([]);
  const [isLearning, setIsLearning] = useState(false);
  const [systemStatus, setSystemStatus] = useState('Initializing...');

  // Initialize neural network
  useEffect(() => {
    const technologies = [
      'React', 'TypeScript', 'Node.js', 'Python', 'AI/ML', 'WebGL',
      'WebAssembly', 'Neural Networks', 'Quantum Computing', 'Blockchain'
    ];

    const initialNodes: NeuralNode[] = technologies.map((tech, index) => ({
      id: `node-${index}`,
      x: Math.random() * 800 + 100,
      y: Math.random() * 400 + 100,
      type: index < 3 ? 'input' : index > 6 ? 'output' : 'hidden',
      technology: tech,
      active: false,
      connections: []
    }));

    // Create connections
    initialNodes.forEach((node, index) => {
      const numConnections = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < numConnections; i++) {
        const targetIndex = Math.floor(Math.random() * initialNodes.length);
        if (targetIndex !== index) {
          node.connections.push(initialNodes[targetIndex].id);
        }
      }
    });

    setNodes(initialNodes);
  }, []);

  // Neural network animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      nodes.forEach(node => {
        node.connections.forEach(connectionId => {
          const targetNode = nodes.find(n => n.id === connectionId);
          if (targetNode) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(targetNode.x, targetNode.y);
            ctx.strokeStyle = node.active && targetNode.active 
              ? '#00FFFF' 
              : 'rgba(0, 255, 255, 0.2)';
            ctx.lineWidth = node.active && targetNode.active ? 3 : 1;
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach(node => {
        const radius = node.active ? 20 : 15;
        const color = node.active ? '#00FFFF' : '#3A3F4E';
        
        // Node glow
        if (node.active) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius + 10, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 255, 255, 0.3)';
          ctx.fill();
        }

        // Node body
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = '#00FFFF';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Node label
        ctx.fillStyle = '#E8F4FD';
        ctx.font = '12px var(--font-mono)';
        ctx.textAlign = 'center';
        ctx.fillText(node.technology, node.x, node.y + 35);
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [nodes]);

  // Simulate learning process
  useEffect(() => {
    const learningInterval = setInterval(() => {
      setIsLearning(true);
      setSystemStatus('Learning patterns...');
      
      // Activate random nodes
      setNodes(prevNodes => 
        prevNodes.map(node => ({
          ...node,
          active: Math.random() > 0.7
        }))
      );

      setTimeout(() => {
        setIsLearning(false);
        setSystemStatus('Developer.exe running optimally');
      }, 2000);
    }, 5000);

    return () => clearInterval(learningInterval);
  }, []);

  return (
    <section id="neural-intro" className="section-spacing bg-background relative overflow-hidden">
      {/* Background Neural Network */}
      <div className="absolute inset-0 opacity-20">
        <canvas
          ref={canvasRef}
          width={1000}
          height={600}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Profile with Biometric Scanning */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Biometric scanning overlay */}
              <div className="absolute inset-0 border-2 border-primary rounded-full animate-pulse">
                <div className="absolute inset-2 border border-accent rounded-full animate-spin">
                  <div className="absolute inset-2 border border-destructive rounded-full animate-pulse">
                    <div className="absolute inset-4 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-pulse" />
                  </div>
                </div>
              </div>
              
              {/* Profile photo */}
              <img 
                src="/I38A1308_1757873611775.jpeg"
                alt="Terence Richardson - Neural Network Analysis"
                className="w-full h-full rounded-full object-cover border-4 border-primary"
              />
              
              {/* Scanning lines */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-destructive to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>

            {/* System Status */}
            <div className="mt-8 text-center">
              <div className="bg-card border border-primary rounded-lg p-4 max-w-md mx-auto">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Activity className="h-5 w-5 text-primary animate-pulse" />
                  <span className="text-sm font-mono text-primary">SYSTEM STATUS</span>
                </div>
                <div className="text-foreground font-mono text-sm">
                  {systemStatus}
                </div>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Neural Network Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
                <span className="text-primary">Neural</span>
                <br />
                <span className="text-accent">Network</span>
                <br />
                <span className="text-destructive">Analysis</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Real-time neural network visualization showing the interconnected 
                web of technologies and skills that power my development process.
              </p>
            </div>

            {/* Live Code Compilation */}
            <div className="bg-card border border-primary rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="h-5 w-5 text-primary" />
                <span className="text-primary font-mono text-sm">LIVE COMPILATION</span>
              </div>
              <div className="font-mono text-sm space-y-1">
                <div className="text-foreground">
                  <span className="text-accent">const</span> developer = <span className="text-primary">new</span> NeuralDeveloper();
                </div>
                <div className="text-muted-foreground">
                  // Initializing quantum processing units...
                </div>
                <div className="text-foreground">
                  developer.<span className="text-accent">learn</span>(technologies);
                </div>
                <div className="text-muted-foreground">
                  // Status: <span className="text-primary">{isLearning ? 'Learning...' : 'Optimized'}</span>
                </div>
              </div>
            </div>

            {/* Technology Nodes */}
            <div className="grid grid-cols-2 gap-4">
              {nodes.slice(0, 6).map((node) => (
                <div
                  key={node.id}
                  className={`bg-card border rounded-lg p-4 transition-all duration-300 ${
                    node.active 
                      ? 'border-primary bg-primary/10' 
                      : 'border-border'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${
                      node.active ? 'bg-primary animate-pulse' : 'bg-muted-foreground'
                    }`} />
                    <span className="text-sm font-mono text-foreground">
                      {node.technology}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Neural Network Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {nodes.filter(n => n.type === 'input').length}
                </div>
                <div className="text-xs text-muted-foreground font-mono">INPUTS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">
                  {nodes.filter(n => n.type === 'hidden').length}
                </div>
                <div className="text-xs text-muted-foreground font-mono">HIDDEN</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-destructive">
                  {nodes.filter(n => n.type === 'output').length}
                </div>
                <div className="text-xs text-muted-foreground font-mono">OUTPUTS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
