import { useEffect, useState } from "react";

interface BackgroundCube {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
  borderRadius: number;
  blur: number;
  isCircle: boolean;
}

const AnimatedBackground = () => {
  const [cubes, setCubes] = useState<BackgroundCube[]>([]);
  const [gridOffset, setGridOffset] = useState(0);

  useEffect(() => {
    const generateCubes = () => {
      const newCubes: BackgroundCube[] = [];
      // Responsive cube count
      const isMobile = window.innerWidth < 640;
      const cubeCount = isMobile ? 5 : 8;
      for (let i = 0; i < cubeCount; i++) {
        newCubes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: isMobile ? Math.random() * 18 + 16 : Math.random() * 32 + 24, // smaller on mobile
          opacity: Math.random() * 0.18 + 0.22, // more subtle
          delay: Math.random() * 2,
          duration: Math.random() * 4 + 5, // slower, smoother
          borderRadius: isMobile ? 9999 : Math.random() * 16 + 16, // circles on mobile, soft squares on desktop
          blur: Math.random() * 6 + 8, // less blur for mobile
          isCircle: isMobile ? true : Math.random() > 0.5,
        });
      }
      setCubes(newCubes);
    };
    generateCubes();
    // Animate grid offset for parallax effect
    const gridInterval = setInterval(() => {
      setGridOffset((prev) => (prev + 0.5) % 50);
    }, 60);
    return () => clearInterval(gridInterval);
  }, []);

  return (
  <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0, touchAction: 'none' }} aria-hidden="true">
      {/* Premium cubes */}
      {cubes.map((cube) => (
        <div
          key={cube.id}
          className="absolute"
          style={{
            left: `${cube.x}%`,
            top: `${cube.y}%`,
            width: `${cube.size}px`,
            height: `${cube.size}px`,
            opacity: cube.opacity,
            borderRadius: cube.isCircle ? '50%' : `${cube.borderRadius}px`,
            backdropFilter: `blur(${cube.blur}px)`,
            boxShadow: `0 2px 16px 0 rgba(0,0,0,0.10), 0 0 0 1px hsl(var(--primary)/0.10)`,
            background: `linear-gradient(120deg, hsl(var(--primary)/0.18) 0%, hsl(var(--primary-foreground)/0.12) 100%)`,
            animation: `cubeFloat ${cube.duration}s cubic-bezier(.4,.8,.2,1) infinite`,
            animationDelay: `${cube.delay}s`,
            transform: `scale(${1 + cube.opacity / 3})`,
            border: 'none',
            transition: 'all 0.3s cubic-bezier(.4,.8,.2,1)',
          }}
        />
      ))}
      {/* Glassmorphism overlay */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          opacity: 0.10,
        }}
      />
      {/* Dynamic grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)/0.08) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)/0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: `${gridOffset}px ${gridOffset}px`,
          opacity: 0.06,
          pointerEvents: 'none',
        }}
      />
      {/* Add keyframes for premium float animation */}
      <style>{`
        @keyframes cubeFloat {
          0% { transform: translateY(0) scale(1); }
          30% { transform: translateY(-8px) scale(1.03); }
          50% { transform: translateY(0) scale(1.06); }
          70% { transform: translateY(8px) scale(1.03); }
          100% { transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;