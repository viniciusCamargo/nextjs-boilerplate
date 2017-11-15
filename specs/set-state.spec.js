import React from 'react'
import { mount } from 'enzyme'

import SetState from '../pages/set-state'

jest.mock('next/router')

describe('Page 2', () => {
  it('should toggle "clicked" state property', () => {
    const wrapper = mount(<SetState />)

    // console.log(wrapper.debug())
    
    wrapper.find('button').simulate('click')
    
    const expected = { clicked: true }
    const actual = wrapper.state()

    expect(actual).toEqual(expected)
  })
})
