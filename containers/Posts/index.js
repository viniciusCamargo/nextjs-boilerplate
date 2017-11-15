import React, { Component } from 'react'
import Error from 'next/error'
import Head from 'next/head'
import Link from 'next/link'

import { fetchPosts } from './state'
import Post from '../components/Post'

export default class Posts extends Component {
  static async getInitialProps ({ store }) {
    try {
      const { home, posts } = store.getState()

      if (!posts['hasPosts']) {
        await store.dispatch(fetchPosts())
        const { posts } = store.getState()

        return { posts: posts['posts'], build: home['build'] }
      }

      return { posts: posts['posts'], build: home['build'] }
    } catch (error) {
      return { error: error['message'] }
    }
  }

  render () {
    const { posts, build, error } = this['props']

    if (error) return <Error />

    return [
      <Head key='head'>
        <title>cool beanz</title>
      </Head>,

      <div key='main'>
        <Link prefetch href='/'>
          <a>Home</a>
        </Link>

        <h1>Posts</h1>

        <h3>Current build: {build}</h3>

        { posts.map(post => <Post key={post.id} {...post} />) }
      </div>
    ]
  }
}
