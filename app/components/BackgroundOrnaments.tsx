'use client';

export default function BackgroundOrnaments() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Animated connected dots pattern */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-[0.15]" 
          style={{ 
            animation: 'rotateOrnaments 50s linear infinite',
            transformOrigin: 'center center'
          }}
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="60" r="1.5" fill="rgba(99, 102, 241, 0.4)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
          
          {/* Connected lines between dots */}
          <g stroke="rgba(99, 102, 241, 0.2)" strokeWidth="0.5" fill="none" opacity="0.6">
            {/* Horizontal connections */}
            <line x1="10%" y1="20%" x2="30%" y2="25%" />
            <line x1="30%" y1="25%" x2="50%" y2="30%" />
            <line x1="50%" y1="30%" x2="70%" y2="35%" />
            <line x1="70%" y1="35%" x2="90%" y2="40%" />
            
            <line x1="15%" y1="60%" x2="35%" y2="65%" />
            <line x1="35%" y1="65%" x2="55%" y2="70%" />
            <line x1="55%" y1="70%" x2="75%" y2="75%" />
            
            <line x1="20%" y1="80%" x2="40%" y2="85%" />
            <line x1="40%" y1="85%" x2="60%" y2="90%" />
            
            {/* Vertical connections */}
            <line x1="25%" y1="10%" x2="25%" y2="50%" />
            <line x1="50%" y1="15%" x2="50%" y2="55%" />
            <line x1="75%" y1="20%" x2="75%" y2="60%" />
            
            {/* Diagonal connections */}
            <line x1="20%" y1="30%" x2="40%" y2="50%" />
            <line x1="60%" y1="40%" x2="80%" y2="60%" />
            <line x1="30%" y1="70%" x2="50%" y2="90%" />
          </g>
          
          {/* Animated circles/nodes */}
          <circle 
            cx="20%" 
            cy="30%" 
            r="3" 
            fill="rgba(99, 102, 241, 0.3)" 
            className="animate-pulse-slow" 
          />
          <circle 
            cx="60%" 
            cy="50%" 
            r="2.5" 
            fill="rgba(139, 92, 246, 0.3)" 
            className="animate-pulse-slow" 
            style={{ animationDelay: '1s' }}
          />
          <circle 
            cx="80%" 
            cy="70%" 
            r="4" 
            fill="rgba(59, 130, 246, 0.3)" 
            className="animate-pulse-slow" 
            style={{ animationDelay: '2s' }}
          />
          <circle 
            cx="40%" 
            cy="15%" 
            r="2" 
            fill="rgba(99, 102, 241, 0.25)" 
            className="animate-pulse-slow" 
            style={{ animationDelay: '0.5s' }}
          />
          <circle 
            cx="70%" 
            cy="85%" 
            r="3.5" 
            fill="rgba(139, 92, 246, 0.25)" 
            className="animate-pulse-slow" 
            style={{ animationDelay: '1.5s' }}
          />
        </svg>
      </div>
      
      <style jsx global>{`
        @keyframes rotateOrnaments {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.3);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
