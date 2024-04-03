import React from 'react';

interface NonClickableButtonProps {
  text: string;
}

const NonClickableButton: React.FC<NonClickableButtonProps> = ({ text }) => {
  return (
    <button 
      style={{ 
        backgroundColor: '#103783',
        borderRadius: '38.832px',
        border: 'none',
        color: 'white',
        cursor: 'default',
        fontSize: '38.832px',
        width: '300px',
      }}
      disabled
    >
      {text}
    </button>
  );
};

export default NonClickableButton;
