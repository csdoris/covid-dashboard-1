import React, { Component } from 'react';
import * as d3 from 'd3';
import { geoMercator } from 'd3-geo';
import nzGeoData from '../../data/newZealand.geojson';

class WorldMap extends Component {

  componentDidMount() {
    let url = 'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson';
    d3.json(url).then(data => this.drawMap(data.features))
    //d3.json(nzGeoData).then(data => this.drawMap(data.features))
  }

  drawMap(data) {
    const regionData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    //const nzCenter = [174.885971,-40.900557];
    const width = 900;
    const height = 600;

    //const projection = geoMercator().center(nzCenter).scale([width*2.2]).translate([width/2,height/2]);
    const projection = d3.geoMercator().center([10,0]).scale(width/2/Math.PI).translate([width/2, height/2]);
    const path = d3.geoPath().projection(projection);

    const svgCanvas = d3.select(this.refs.canvas).append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "#e7e9ee")
      .style("padding", 10)
      .style("margin-left", 50);

   data.map((d, i) => {
     svgCanvas.append("path")
      .attr("d", path(d))
      .attr("key", "path" + i)
      .attr("fill", "#676767")
      .style("stroke", "#ffffff");
   });

    // Add circles:
    svgCanvas
      .selectAll("myCircles")
      .data(data.sort(function(a,b) { return +b.n - +a.n }).filter(function(d,i){ return i<1000 }))
      .enter()
      .append("circle")
        .attr("cx", projection([104,35])[0])
        .attr("cy", projection([104,35])[1])
        .attr("r", 15)
        .style("fill", '#ff420e')
        .attr("fill-opacity", .4)
        .attr("stroke", '#none')
  }

  render() {
    return (
      <div ref="canvas"></div>
    )
  }
}
export default WorldMap;