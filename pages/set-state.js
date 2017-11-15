import React, { Component } from 'react'
import Link from 'next/link'

const handleClick = (prevState) => ({ clicked: !prevState['clicked'] })

export default class extends Component {
  /* componentDidUpdate () {
    console.log(this.state)
  } */

  render() {
    const { clicked } = this['state']

    return (
      <div>
        <style global jsx>{`
          a {
            display: block;
            margin-bottom: 1em;
          }`
        }</style>

        <Link prefetch href='/'>
          <a>Home</a>
        </Link>

        <button onClick={() => this.setState(handleClick)}>is it clicked? {clicked ? 'yep!' : 'nope!'}</button>
      </div>
    )
  }

  state = { clicked: false }
}
