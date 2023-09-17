import React from 'react';

const Nav: React.FC = () => {
    const navStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px 0',
        cursor: 'pointer'
    };

    const leftTextStyle: React.CSSProperties = {
        flex: 1, 
    };

    const rightTextStyle: React.CSSProperties = {
        flex: 1, 
    };

    return (
        <div style={navStyle}>
            <div style={leftTextStyle}>Load</div>
            <div style={rightTextStyle}>초기화</div>
        </div>
    );
};

export default Nav;