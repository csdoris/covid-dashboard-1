import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import DashboardItem from "./DashboardItem";

const charts = [
  {
    title: "World Map",
    type: "wmap",
  },
  {
    title: "Number of confirmed cases",
    type: "line",
  },
  {
    title: "Number of daily cases",
    type: "bar",
  },
  {
    title: "Confirmed cases by country",
    type: "list",
  },
  {
    title: "Total confirmed cases",
    type: "number",
    number: 2331099,
  },
  {
    title: "Total deaths",
    type: "number",
    number: 160925,
  },
  {
    title: "Total recovery",
    type: "number",
    number: 598365,
  },
];

class Dashboard extends Component {
  render() {
    return (
      <Grid centered columns={3} padded stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Grid centered columns={1}>
              <Grid.Row>
                <Grid.Column>
                  <DashboardItem title={charts[3].title} type={charts[3].type} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <DashboardItem title={charts[4].title} type={charts[4].type} number={charts[4].number} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <DashboardItem title={charts[5].title} type={charts[5].type} number={charts[5].number} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <DashboardItem title={charts[6].title} type={charts[6].type} number={charts[6].number} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column width={8}>
            <DashboardItem title={charts[0].title} type={charts[0].type} />
          </Grid.Column>
          <Grid.Column width={5}>
            <Grid centered columns={1}>
              <Grid.Row>
                <Grid.Column>
                  <DashboardItem title={charts[1].title} type={charts[1].type} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                 <DashboardItem title={charts[2].title} type={charts[2].type} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Dashboard;
