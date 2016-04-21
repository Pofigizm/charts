import React from 'react'
import { BarChart } from 'react-d3-basic'

const width = 1000
const height = 500
const margins = { 
  left: 100,
  right: 100,
  top: 50, 
  bottom: 50
}
const chartSeries = [
  {
    field: 'size'
  }
]
const x = d => d.index
const xScale = 'ordinal'

const Chart = ({
  barCount = 5,
  minHeight = 0,
  maxHeight = 1000
}) => {
  const rnd = () =>
    Math.floor(
      Math.random() *
      (Number(maxHeight) - Number(minHeight)) +
      Number(minHeight)
    )

  const chartData = Array(Number(barCount))
    .fill(0)
    .map((_, i) => ({
      size: rnd(),
      index: i + 1 
    }))

  return (
    <BarChart
      data={chartData}
      width={width}
      height={height}
      chartSeries ={chartSeries}
      x={x}
      xScale={xScale}
    />
  )
}

export default Chart
