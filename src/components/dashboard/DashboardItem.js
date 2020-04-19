import React, { Component } from 'react';
import { Card, Container, Label } from 'semantic-ui-react';

import BarChart from '../charts/BarChart';
import LineChart from '../charts/LineChart';
import RankList from '../charts/RankList';
import WorldMap from '../charts/WorldMap';
import NumberCard from '../dashboard/NumberCard';

class DashboardItem extends Component {
  render() {
    const { title, type, number } = this.props;
    return (
      <Card centered fluid>
        <Card.Content>
          <Label color='blue' ribbon>{title}</Label>
          <Card.Content>
            <Container><p></p><p></p></Container>
            { (type === 'list') && <RankList/> }
            { (type === 'wmap') && <WorldMap/> }
            { (type === 'bar') && <BarChart/> }
            { (type === 'line') && <LineChart/> }
            { (type === 'number') && <NumberCard number={number}/> }
          </Card.Content>
        </Card.Content>
      </Card>
    )
  }
}

export default DashboardItem;
