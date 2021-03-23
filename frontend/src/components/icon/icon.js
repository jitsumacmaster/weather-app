import React from 'react';
import { withRouter } from 'react-router-dom';

class Icon extends React.Component {
  render() {
    return (
        <img src={`http://www.openweathermap.org/img/wn/${this.props.icon}@2x.png`}/>
        );
      }
}

export default withRouter(Icon);