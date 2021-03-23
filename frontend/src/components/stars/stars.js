import React from 'react';
import { withRouter } from 'react-router-dom';

class Stars extends React.Component {
  render() {
    return (
        <div>
            <div className="stars"/>
            <div className="stars2"/>
            <div className="stars3"/>
        </div>
        );
      }
}

export default withRouter(Stars);