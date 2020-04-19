import React, { Component } from "react";
import { List, Label } from "semantic-ui-react";

class RankList extends Component {
  render() {
    const data = [
      {
        country: 'US',
        confirmed: 735242,
      },
      {
        country: 'Spain',
        confirmed: 194416,
      },
      {
        country: 'Italy',
        confirmed: 175925,
      },
      {
        country: 'France',
        confirmed: 152948,
      },
      {
        country: 'United Kingdom',
        confirmed: 115314,
      },
      {
        country: 'China',
        confirmed: 152948,
      },
      {
        country: 'Turkey',
        confirmed: 152948,
      },
      {
        country: 'Iran',
        confirmed: '80868',
      },
      {
        country: 'Belgium',
        confirmed: 37183,
      },
      {
        country: 'Brazil',
        confirmed: 36925,
      },
    ];

    return (
      <List divided relaxed>
        { data.map((item, i) => (
          <List.Item key={i}>
            <List.Content as='a'>
              <Label color='orange' horizontal>{item.confirmed}</Label> {item.country}
            </List.Content>
          </List.Item>
        ))}
      </List>
    );
  }
}

export default RankList;
