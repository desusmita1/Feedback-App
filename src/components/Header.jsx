import React from 'react';

function Header({
  text = 'Feedback UI',
  bgColor = 'rgba(0, 0, 0, 0.4)',
  textColor = '#ff6a95',
}) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  console.log('Header props:', { text, bgColor, textColor }); // Should now show actual values

  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

export default Header;
