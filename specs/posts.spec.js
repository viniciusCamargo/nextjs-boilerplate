import React from 'react'
import { shallow, mount, render } from 'enzyme'
// import renderer from 'react-test-renderer'

import { Post } from '../containers/components/Post'

/**
 * @see {@link https://github.com/zeit/next.js/issues/1827#issuecomment-323721221}
 */

jest.mock('next/router')

describe('Post', () => {
  it('renders a Post', () => {
    const expected = {
      title: 'this is the title',
      body: '...and the body'
    }

    const wrapper = shallow(<Post {...expected} />)

    const actual = {
      title: wrapper.find('h3').contains(expected['title']),
      body: wrapper.find('p').text()
    }

    expect(actual['title']).toBeTruthy()
    expect(actual['body']).toEqual(expected['body'])
  })
})
