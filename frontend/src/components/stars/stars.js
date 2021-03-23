import React from 'react';
import { withRouter } from 'react-router-dom';

class Stars extends React.Component {
  render() {
    return (
        <div>
            <div id="stars"/>
            <div id="stars2"/>
            <div id="stars3"/>
        </div>
        );
      }
}

export default withRouter(Stars);