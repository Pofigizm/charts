import React from 'react'
import { Link, browserHistory } from 'react-router'

export default function App({ children }) {
  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/first">First</Link>
        {' '}
        <Link to="/second?barCount=20&minHeight=500&maxHeight=2000">Second</Link>
      </header>
      <div>{children}</div>
    </div>
  )
}
