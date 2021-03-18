import React from 'react';
import { withRouter } from 'react-router-dom';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.getGeoLocation()
    .then(() => {
      this.props.getWeather(this.props.geolocation.coords)})
  }

  // update(field) {
  //   return e => this.setState({
  //     [field]: e.currentTarget.value
  //   });
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(this)
  //   let user = {
  //     email: this.state.email,
  //     password: this.state.password
  //   };

  //   this.props.login(user); 
  // }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default withRouter(Weather);