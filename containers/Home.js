import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

const initialState = {
  build: 0
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BUMP_BUILD':
      console.log(state.build + action.value)
      return { ...state, build: state.build + action.value }

    default: return state
  }
}

export const bumpBuild = (value) => (dispatch) => dispatch({ type: 'BUMP_BUILD', value })

const Home = ({ build, bumpBuild }) => (
  <div>
    <Link prefetch href='/posts'>
      <a>Posts</a>
    </Link>

    <h1>Home</h1>

    <h3>Current build: {build}</h3>

    <p><button onClick={() => bumpBuild(1)}>Bump build!</button></p>

    <Link prefetch href='/set-state'>
      <a>set-state</a>
    </Link>
  </div>
)

export default connect(
  ({ home }) => ({ build: home.build }),
  { bumpBuild }
)(Home)
