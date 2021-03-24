import React from 'react';

class Icon extends React.Component {
  render() {
    return (
        <img src={`http://www.openweathermap.org/img/wn/${this.props.icon}@2x.png`}/>
        );
      }
}

export default Icon;