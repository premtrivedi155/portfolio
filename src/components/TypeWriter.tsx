import React, { useState, useEffect } from 'react';

const Typewriter: React.FC<{ texts: string[] }> = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100); // Typing speed
  const [loopCount, setLoopCount] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[index];
      setText(isDeleting ? currentText.substring(0, text.length - 1) : currentText.substring(0, text.length + 1));
      
      // Set typing speed
      setSpeed(isDeleting ? 100 : 200);

      // Check if text is fully typed or deleted
      if (!isDeleting && text === currentText) {
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((index + 1) % texts.length); // Move to the next text
        setLoopCount(loopCount + 1);
      }
    };

    const typingInterval = setInterval(handleTyping, speed);

    return () => clearInterval(typingInterval);
  }, [index, text, isDeleting, texts, speed, loopCount]);

  return (
    <h1 className="text-8xl font-bold">{text}</h1>
  );
};

export default Typewriter;
