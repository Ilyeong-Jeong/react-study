import React from 'react';

function Name({name, color, visible}) {
  return (
    <div 
      className="name"
      style={{ color }}
    >
      { name }
      { visible && <p>***</p> }
    </div>
  );
}

Name.defaultProps = {
  name: '이름 없음',
  color: 'aqua',
}

export default Name;