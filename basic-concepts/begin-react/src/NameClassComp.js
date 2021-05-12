import React, { Component } from 'react';

class Name extends Component {
  static defaultProps = {
    name: '이름없음'
  };

  render() {
    const {name, color, visible} = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    );
  }
}

export default Name;