import React, { useState, useRef } from 'react';

function InputSamples() {
  const [texts, setTexts] = useState({
    name: '',
    nickname: '',
  });

  const { name, nickname } = texts;

  const nameInput = useRef();

  const onChange = (e) => {
    const { value, name } = e.target;
    setTexts({
      ...texts,
      [name]: value,
    });
  };

  const onReset = () => {
    setTexts({
      name: '',
      nickname: '',
    });

    nameInput.current.focus();
  };

  return (
    <div>
      <input 
        name="name" 
        placeholder="name input" 
        ref={nameInput}
        value={ name } 
        onChange={ onChange } 
      />
      <input name="nickname" placeholder="nickname input" value={ nickname } onChange={ onChange } />

      <button onClick={ onReset }>reset</button>

      <div>
        <b>name: { name }</b>
        <b>nickname: { nickname }</b>
      </div>
    </div>
  );
}

export default InputSamples;