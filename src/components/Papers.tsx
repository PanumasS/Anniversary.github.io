import { useState } from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PapersProps {
  onReturnToLetter: () => void;
}

export function Papers({ onReturnToLetter }: PapersProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');

  const papers = [
    {
      title: "We play Stardew valley",
      imageUrl: "src/components/Stardew.jpg",
      content: `ครั้งนี้คงเป็นครั้งที่สองที่เราเล่นด้วยกัน
      
ครั้งนี้น่าจะเป็นหลังจากที่เราได้เป็นคนคุยกันแล้วใช่มั้ยนะ ครั้งนี้เค้าสามารภาพเลยล่ะว่าอยากขอแต่งงานในเกมมากก

โมเมนท์ที่เค้าชอบมากๆเลยคือตอนที่เค้ากำลังสารภารพเธอแล้วเอาแหวนยื่นให้ เค้าเขินมากๆเลยล่ะ


ขนาดตอนนี้ที่เค้านั่งพิมพ์อยู่ยังเขินมากเลย
ยิ้มน้อยยิ้มใหญ่เลย555555`,
    },
    {
      title: "We hangout together really often",
      imageUrl: "src/components/Meet.jpg", // Replace with your image URL
      content: `เราไปเที่ยวด้วยกันบ่อยมากกก
      
ภาพที่ยกมามันอาจจะน้อยมากๆเลย แต่เค้าพยายามจัดเลย์เอาท์น่ะ555
เอาเป็นว่าเราไปไหนด้วยกันบ่อยมากๆเลย ไปกิน ไปเล่น ไปเที่ยวกัน

นี่ยังไม่รวมที่เธอมาหาอีกนะ ไหนจะไปบางแสนอีก เราไปกันหลายที่มากแค่ 2 เดือนเอง

เค้ามีความสุขมากๆเลยล่ะช่วงเวลาที่ผ่านที่เราได้ใช้ร่วมกัน`,
    },
    {
      title: "What you mean to me",
      imageUrl: "src/components/Mean.jpg", // Replace with your image URL
      content: `ถ้าถามเค้าว่าเธอมีความหมายกับเค้าแค่ไหน
      
เค้าว่า เค้าคงต้องใช้เวลาซัก 1 วันเต็มๆในการอธิบาย หรืออาจจะมากกว่าซะอีก

เค้าอยากจะบอกเธอจริงๆนะคับ ว่าเธอน่ะมีความหมายกับเค้ามากๆเลย ไม่รู้จะบอกยังไงดีให้หมด555 แต่นั่นแหละ เธอมีความหมายกับเค้ามากๆ

เธอเป็นโลกทั้งใบที่เค้าอาศัยอยู่ เป็นความสุขในทุกวัน เป็นทุกอย่างที่เค้าจะนึกได้เลย`,
    },
    {
      title: "Till the end that I doesn't know",
      imageUrl: "src/components/TillEnd.jpg", // Replace with your image URL
      content: `สุดท้ายนี้ก่อนที่หน้าจดหมายนี้จะหมดลง
      
เค้าอยากบอกกับเธอว่า อยู่เป็นความสุขของกันและกันไปนานๆนะครับ อยู่ไปเรื่อยๆเลย เพราะทั้งเค้าและเธอต่างก็ไม่มีใครรู้ถึงอนาคตหรอกว่าจะเป็นยังไง

เค้าจะไม่ขออะไรจากเธอแม้แต่อย่างเดียว เพราะที่เธอให้มาทั้งหมด มันมากกว่าที่โลกนี้จะให้เค้ามาอีก

อย่าว่าตัวเอง ดูแลตัวเองดีๆ อย่าดื้อ เธอเป็นคนเก่งมากๆเลย อย่าด้อยค่าตัเองเลยนะ

ครั้งไหนที่เธอท้อเค้าอยู่ตรงนี้ จะคอยกอดปลอบใจ เป็นไออุ่นอยู่ตรงนี้เสมอ

ถึงเค้าจะไม่ใช่คนดีอะไรแต่เค้าหวังดีกับเธอมากๆเลย เค้าจะอยู่ตรงนี้เสมอนะคับ

วันไหนทีล้มเค้าจะคอยรับ วันไหนที่ประสบความสำเร็จ คนที่ปรบมือดังที่สุด คือเค้าเอง

รักเธอนะ`,
    },
  ];

  const nextPage = () => {
    if (currentPage < papers.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('next');
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('prev');
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-20">
      {/* Return to Letter Button */}
      <button
        onClick={onReturnToLetter}
        className="fixed top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white text-blue-500 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all z-50"
      >
        <Home size={20} />
        <span>Back to Letter</span>
      </button>

      <div className="relative w-full max-w-4xl" style={{ perspective: '2000px' }}>
        {/* Paper stack effect */}
        <div className="absolute inset-0 bg-white rounded-lg transform translate-x-2 translate-y-2 opacity-30"></div>
        <div className="absolute inset-0 bg-white rounded-lg transform translate-x-1 translate-y-1 opacity-50"></div>
        
        {/* Current paper */}
        <div 
          className={`relative bg-white rounded-lg shadow-2xl overflow-hidden ${
            isFlipping 
              ? (flipDirection === 'next' ? 'animate-pageFlipNext' : 'animate-pageFlipPrev')
              : 'animate-fadeIn'
          }`}
          style={{
            boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Header with decorative border */}
          <div className="bg-gradient-to-r from-blue-100 via-sky-50 to-blue-100 border-b-4 border-blue-300 p-6">
            <h2 className="text-blue-700 text-center">{papers[currentPage].title}</h2>
            <div className="flex justify-center gap-2 mt-4">
              {papers.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentPage 
                      ? 'w-8 bg-blue-500' 
                      : 'w-2 bg-blue-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Image section */}
              <div className="order-2 md:order-1">
                <div className="relative rounded-lg overflow-hidden shadow-lg border-4 border-blue-100">
                  <div className="aspect-square bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center">
                    <ImageWithFallback
                      src={papers[currentPage].imageUrl}
                      alt={papers[currentPage].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Photo corner decoration */}
                  <div className="absolute top-2 right-2 w-8 h-8 border-t-4 border-r-4 border-blue-300"></div>
                  <div className="absolute bottom-2 left-2 w-8 h-8 border-b-4 border-l-4 border-blue-300"></div>
                </div>
              </div>

              {/* Text section */}
              <div className="order-1 md:order-2">
                <div className="prose prose-blue max-w-none">
                  <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                    {papers[currentPage].content}
                  </div>
                </div>
                
                {/* Signature area */}
                <div className="mt-8 pt-6 border-t border-blue-100">
                  <p className="text-blue-400 text-right">With all my love ❤️</p>
                  <p className="text-blue-300 text-right mt-2">Ai Kloa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 via-sky-50 to-blue-50 border-t border-blue-100">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                currentPage === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl'
              }`}
            >
              <ChevronLeft size={20} />
              <span>Previous</span>
            </button>

            <div className="text-blue-400">
              Page {currentPage + 1} of {papers.length}
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === papers.length - 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                currentPage === papers.length - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl'
              }`}
            >
              <span>Next</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
