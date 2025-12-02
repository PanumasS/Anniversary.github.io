import { useState, useEffect, useRef } from 'react';
import { Letter } from './components/Letter';
import { Papers } from './components/Papers';

export default function App() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [showPapers, setShowPapers] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleLetterClick = () => {
    setIsLetterOpen(true);
    
    // Play music when letter is opened
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
    
    // Show papers after animation
    setTimeout(() => {
      setShowPapers(true);
    }, 1500);
  };

  const handleReturnToLetter = () => {
    setShowPapers(false);
    setIsLetterOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-sky-100 overflow-hidden">
      {/* Background Music - INSERT YOUR SONG URL HERE */}
      <audio ref={audioRef} loop>
        <source src="Perfect_Pun.mp3" type="audio/mpeg" />
        <source src="Perfect_Pun.ogg" type="audio/ogg" />
      </audio>

      {!showPapers ? (
        <Letter isOpen={isLetterOpen} onClick={handleLetterClick} />
      ) : (
        <Papers onReturnToLetter={handleReturnToLetter} />
      )}
    </div>
  );
}
