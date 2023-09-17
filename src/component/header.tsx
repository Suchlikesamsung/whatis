import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <div style={titleStyle}>angular / angular cli</div>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px 0',
};

const titleStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 'bold',
};

export default Header;
