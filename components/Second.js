import React from 'react'
import { connect } from 'react-redux'

import Chart from './Chart'

const Second = ({
  query = {}
}) => (
  <Chart
    barCount={query.barCount}
    minHeight={query.minHeight}
    maxHeight={query.maxHeight}
  />
)

const provider = state => ({
  query: state.routing.locationBeforeTransitions.query
})

export default connect(provider)(Second)
