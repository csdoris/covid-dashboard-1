import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import NumberFormat from 'react-number-format';

class NumberCard extends Component {
  render() {
    const {number} = this.props;
    return (
      <Container textAlign='center'><p class="large text"><NumberFormat value={number} displayType={'text'} thousandSeparator={true} /></p></Container>
    )
  }
}

export default NumberCard;
