import React from 'react';
import '../App.scss';
class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.country && this.props.city && (
          <p className='city'>
            {this.props.city}, {this.props.country}
          </p>
        )}
        {this.props.temperature && <p> {this.props.temperature} ºF</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.description && <p>Conditions: {this.props.description}</p>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}
export default Weather;
