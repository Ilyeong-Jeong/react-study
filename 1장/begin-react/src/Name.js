import React from 'react';

function Name({name, color}) {
  return (
    <div 
      className="name"
      style={{ color }}
    >
      {name}
    </div>
  );
}

Name.defaultProps = {
  name: '이름 없음',
  color: 'aqua',
}

export default Name;