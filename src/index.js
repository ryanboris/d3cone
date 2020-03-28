import * as d3 from 'd3'

const arr = d3.range(100)

d3.select('body')
  .append('svg')
  .attr('height', 2000)
  .attr('width', 2000)
  .selectAll('circle')
  .data(
    arr.filter((item) => item % 2 !== 0 || item % 3 !== 0 || item % 7 !== 0)
  )
  .enter()
  .append('circle')
  .attr('cx', (d) => d * 20)
  .attr('cy', (d) => d * 20)
  .attr('r', (d) => (d % 2 == 0 ? 10 : 10 * d))
  .attr(
    'fill',
    (d) => `hsl(${Math.random() * 360}, ${100 - d}%, ${d % 2 === 0 ? 20 : 70}%)`
  )
  .transition()
  .duration(1000)
  .delay(function (d, i) {
    return i * 10
  })
  .attr('r', function (d) {
    return d * Math.sqrt(d)
  })
