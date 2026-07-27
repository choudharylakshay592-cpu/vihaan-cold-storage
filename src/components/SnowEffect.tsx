import React, { useEffect, useRef, useState } from 'react';
import { Snowflake, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SnowflakeParticle {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  speedX: number;
  opacity: number;
  swing: number;
  swingSpeed: number;
}

export const SnowEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isActive, setIsActive] = useState<boolean>(true);
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Flakes count proportional to screen width
    const particleCount = Math.floor(Math.min(width, 1400) / 12);
    const particles: SnowflakeParticle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        // Reduced size as requested ("snow size little less"): 1.0px to 3.2px
        radius: Math.random() * 2.2 + 1.0,
        speedY: Math.random() * 0.9 + 0.4,
        speedX: Math.random() * 0.4 - 0.2,
        opacity: Math.random() * 0.6 + 0.3,
        swing: Math.random() * Math.PI * 2,
        swingSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Horizontal sinusoidal sway
        p.swing += p.swingSpeed;
        const currentSpeedX = p.speedX + Math.sin(p.swing) * 0.35;

        p.y += p.speedY;
        p.x += currentSpeedX;

        // Reset particle when reaching bottom or edges
        if (p.y > height) {
          p.y = -10;
          p.x = Math.random() * width;
        }
        if (p.x > width) {
          p.x = 0;
        } else if (p.x < 0) {
          p.x = width;
        }

        // Draw flake
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        const isGoldShimmer = i % 6 === 0;

        if (isDark) {
          // Dark mode snow colors
          if (isGoldShimmer) {
            ctx.fillStyle = `rgba(229, 193, 88, ${p.opacity * 0.85})`;
            ctx.shadowColor = '#e5c158';
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
            ctx.shadowColor = '#ffffff';
          }
        } else {
          // Light mode snow colors (cyan-blue and gold for high visibility on light bg)
          if (isGoldShimmer) {
            ctx.fillStyle = `rgba(217, 119, 6, ${p.opacity * 0.9})`;
            ctx.shadowColor = '#d97706';
          } else {
            ctx.fillStyle = `rgba(2, 132, 199, ${p.opacity * 0.75})`;
            ctx.shadowColor = '#0284c7';
          }
        }
        
        ctx.shadowBlur = p.radius * 1.5;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive, isDark]);

  return (
    <>
      {isActive && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-30"
          style={{ opacity: isDark ? 0.85 : 0.75 }}
        />
      )}

      {/* Floating Control Widget (Theme Toggle + Snow Effect) */}
      <div className="fixed bottom-4 left-4 z-40 flex items-center space-x-2">
        {/* Snow Toggle Button */}
        <button
          onClick={() => setIsActive(!isActive)}
          className={`px-3 py-2 rounded-xl border text-xs font-semibold flex items-center space-x-2 backdrop-blur-md shadow-xl transition-all duration-300 ${
            isDark
              ? isActive
                ? 'bg-[#0c2e1f]/90 border-emerald-500/50 text-[#e5c158]'
                : 'bg-[#0e131d]/90 border-slate-700 text-slate-400 hover:text-white'
              : isActive
                ? 'bg-sky-100/90 border-sky-300 text-sky-800'
                : 'bg-white/90 border-slate-300 text-slate-600 hover:text-slate-900'
          }`}
          title={isActive ? 'Disable Falling Snow Animation' : 'Enable Falling Snow Animation'}
        >
          <Snowflake className={`w-3.5 h-3.5 ${isActive ? 'animate-spin text-[#e5c158] dark:text-[#e5c158]' : ''}`} />
          <span className="hidden sm:inline">Snow:</span>
          <span>{isActive ? 'ON' : 'OFF'}</span>
        </button>

        {/* Dark / Light Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`px-3 py-2 rounded-xl border text-xs font-semibold flex items-center space-x-2 backdrop-blur-md shadow-xl transition-all duration-300 ${
            isDark
              ? 'bg-[#0e131d]/90 border-[#d4af37]/30 text-[#e5c158] hover:bg-[#131d33]'
              : 'bg-white/90 border-sky-200 text-sky-900 hover:bg-sky-50'
          }`}
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDark ? (
            <>
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Light Mode</span>
            </>
          ) : (
            <>
              <Moon className="w-3.5 h-3.5 text-sky-700" />
              <span className="hidden sm:inline">Dark Mode</span>
            </>
          )}
        </button>
      </div>
    </>
  );
};
