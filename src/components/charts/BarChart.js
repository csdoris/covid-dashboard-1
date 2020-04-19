import React, { Component } from 'react';
import * as d3 from 'd3';

const data = [
  {
    day: '1',
    number: 2,
  },
  {
    day: '2',
    number: 48,
  },
  {
    day: '3',
    number: 98,
  },
  {
    day: '4',
    number: 127,
  },
  {
    day: '5',
    number: 285,
  },
  {
    day: '6',
    number: 236,
  },
  {
    day: '7',
    number: 184,
  },
  {
    day: '8',
    number: 42,
  },
  {
    day: '9',
    number: 19,
  },
  {
    day: '10',
    number: 8,
  },
]

class BarChart extends Component {

  componentDidMount() {
    this.drawChart(data);
  }

  drawChart(data) {
    const margin = {top: 30, right: 30, bottom: 70, left: 60};
    const width = 460 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svgCanvas = d3.select(this.refs.canvas)
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // X axis
    const xScale = d3.scaleBand()
      .range([0, width])
      .domain(data.map((item) => item.day))
      .padding(0.2)
    svgCanvas.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    // Y axis
    const yScale = d3.scaleLinear()
      .range([height, 0])
      .domain([0, 500]);
    svgCanvas.append('g')
      .call(d3.axisLeft(yScale));

    // Bars
    svgCanvas.selectAll("mybar")
      .data(data)
      .enter()
      .append("rect")
        .attr("x", (item) => xScale(item.day))
        .attr("y", (item) => yScale(item.number))
        .attr("width", xScale.bandwidth())
        .attr("height", (item) => height - yScale(item.number))
        .attr("fill", "#69b3a2")
  }

  render() {
    return (
      <div ref="canvas"></div>
    )
  }
}

export default BarChart;
