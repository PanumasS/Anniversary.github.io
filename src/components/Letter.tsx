interface LetterProps {
  isOpen: boolean;
  onClick: () => void;
}

export function Letter({ isOpen, onClick }: LetterProps) {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="relative">
        {/* Instruction text - only show when closed */}
        {!isOpen && (
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-center animate-pulse">
            <p className="text-blue-400">Click to open</p>
          </div>
        )}
        
        {/* Envelope */}
        <div 
          className={`relative w-80 h-56 cursor-pointer transition-all duration-1000 ${
            isOpen ? 'scale-110' : 'hover:scale-105'
          }`}
          onClick={!isOpen ? onClick : undefined}
        >
          {/* Envelope body */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg shadow-2xl" 
               style={{ 
                 boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)' 
               }}>
            {/* Envelope flap decoration */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-400"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-400"></div>
          </div>

          {/* Envelope flap */}
          <div 
            className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-blue-300 to-blue-400 origin-top transition-all duration-1000 shadow-lg`}
            style={{
              transform: isOpen ? 'rotateX(-180deg)' : 'rotateX(0deg)',
              transformStyle: 'preserve-3d',
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            }}
          >
            {/* Heart seal */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-8 h-8 bg-red-400 rounded-full"
                 style={{
                   transform: 'translateZ(1px)',
                   boxShadow: '0 2px 8px rgba(239, 68, 68, 0.4)'
                 }}>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                ❤️
              </div>
            </div>
          </div>

          {/* Letter inside */}
          <div 
            className={`absolute inset-4 bg-white rounded shadow-inner transition-all duration-1000 flex items-center justify-center p-6 ${
              isOpen ? 'translate-y-[-20px] opacity-100' : 'translate-y-0 opacity-90'
            }`}
          >
            <div className="text-center">
              <h1 className="text-blue-600 mb-4">Happy 2-Month Anniversary</h1>
              <p className="text-blue-400">My Dearest Love ❤️</p>
              {isOpen && (
                <div className="mt-4 text-blue-300 animate-pulse">
                  <p>Opening...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
