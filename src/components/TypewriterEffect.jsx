import React, { useState, useEffect } from 'react';

const TypewriterEffect = () => {
  const texts = [
    "explore with running, cycling,",
    "Stream Gaming,",
    "visualize the world with Art"
  ];
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (!isDeleting && charIndex < fullText.length) {
        // Typing
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === fullText.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        // Move to next text
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [currentTextIndex, charIndex, isDeleting, texts]);

  return (
    <div className="flex justify-center items-center py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            {currentText}
          </span>
          <span className="animate-pulse text-blue-600">|</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover endless possibilities and unleash your creativity
        </p>
      </div>
    </div>
  );
};

export default TypewriterEffect;