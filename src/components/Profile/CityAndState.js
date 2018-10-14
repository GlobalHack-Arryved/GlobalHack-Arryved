import React, { PureComponent } from 'react';

class CityAndState extends PureComponent {
  render() {
    return (
      <p>
        <strong>{this.props.city.data.name}, {this.props.city.data.state}</strong>
      </p>
    );
  }
}

export default CityAndState;