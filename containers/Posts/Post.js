import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Error from 'next/error'

import { fetchPost } from './state'

export default class extends Component {
  static async getInitialProps ({ query, store }) {
    try {
      if (!query['id']) return { notFound: true }

      const { posts } = store.getState()

      if (!posts['hasPost']) {
        await store.dispatch(fetchPost(query['id']))
        const { posts } = store.getState()

        return { post: posts['post'] }
      }

      return { post: posts['post'] }
    } catch (error) {
      return { error: error['message'] }
    }
  }

  render () {
    const { error, notFound, post } = this['props']

    if (error) return <Error />
    if (notFound) return <Error statusCode={404} />

    const { id, title, body } = post

    return [
      <Head key='head'>
        <title>{title}</title>
        <meta property='og:image' content='http://via.placeholder.com/600x325' />
        <meta property='og:title' content={title} />
        <meta property='og:url' content={`https://lets-webapp.herokuapp.com/posts/${id}`} />
        <meta property='og:site_name' content='next.js boilerplate' />
      </Head>,

      <div key='main'>
        <Link href='/posts'>
          <a>return to posts</a>
        </Link>

        <h1>{title}</h1>
        <p>
          {body}
        </p>
      </div>
    ]
  }
}
