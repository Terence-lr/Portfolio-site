import { useEffect, useState } from 'react';
import { Cpu, Activity } from 'lucide-react';

interface NeuralNode {
  id: string;
  technology: string;
  active: boolean;
  type: 'input' | 'hidden' | 'output';
}

export default function MobileNeuralIntro() {
  const [nodes, setNodes] = useState<NeuralNode[]>([]);
  const [isLearning, setIsLearning] = useState(false);
  const [systemStatus, setSystemStatus] = useState('Initializing...');
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize neural network
  useEffect(() => {
    const technologies = [
      'React', 'TypeScript', 'Node.js', 'Python', 'AI/ML', 'WebGL',
      'WebAssembly', 'Neural Networks', 'Quantum Computing', 'Blockchain'
    ];

    const initialNodes: NeuralNode[] = technologies.map((tech, index) => ({
      id: `node-${index}`,
      technology: tech,
      active: false,
      type: index < 3 ? 'input' : index > 6 ? 'output' : 'hidden'
    }));

    setNodes(initialNodes);
  }, []);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Profile with Biometric Scanning */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-64 h-64 mx-auto">
              {/* Simplified biometric scanning for mobile */}
              <div className="absolute inset-0 border-2 border-primary rounded-full animate-pulse">
                <div className="absolute inset-2 border border-accent rounded-full animate-spin">
                  <div className="absolute inset-4 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-pulse" />
                </div>
              </div>
              
              {/* Profile photo */}
              <img 
                src="/I38A1308_1757873611775.jpeg"
                alt="Terence Richardson - Neural Network Analysis"
                className="w-full h-full rounded-full object-cover border-4 border-primary"
              />
              
              {/* Simplified scanning lines for mobile */}
              {!isMobile && (
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              )}
            </div>

            {/* System Status */}
            <div className="mt-6 text-center">
              <div className="bg-card border border-primary rounded-lg p-4 max-w-sm mx-auto">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Activity className="h-4 w-4 text-primary animate-pulse" />
                  <span className="text-xs font-mono text-primary">SYSTEM STATUS</span>
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
          <div className="space-y-6 order-1 lg:order-2">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                <span className="text-primary">Neural</span>
                <br />
                <span className="text-accent">Network</span>
                <br />
                <span className="text-destructive">Analysis</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Real-time neural network visualization showing the interconnected 
                web of technologies and skills that power my development process.
              </p>
            </div>

            {/* Live Code Compilation */}
            <div className="bg-card border border-primary rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="h-4 w-4 text-primary" />
                <span className="text-primary font-mono text-xs">LIVE COMPILATION</span>
              </div>
              <div className="font-mono text-xs space-y-1">
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

            {/* Technology Nodes - Mobile Optimized */}
            <div className="grid grid-cols-2 gap-3">
              {nodes.slice(0, 6).map((node) => (
                <div
                  key={node.id}
                  className={`bg-card border rounded-lg p-3 transition-all duration-300 ${
                    node.active 
                      ? 'border-primary bg-primary/10' 
                      : 'border-border'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      node.active ? 'bg-primary animate-pulse' : 'bg-muted-foreground'
                    }`} />
                    <span className="text-xs font-mono text-foreground">
                      {node.technology}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Neural Network Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="text-xl font-bold text-primary">
                  {nodes.filter(n => n.type === 'input').length}
                </div>
                <div className="text-xs text-muted-foreground font-mono">INPUTS</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-accent">
                  {nodes.filter(n => n.type === 'hidden').length}
                </div>
                <div className="text-xs text-muted-foreground font-mono">HIDDEN</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-destructive">
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
