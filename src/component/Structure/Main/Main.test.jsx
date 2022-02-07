import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import Main from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Main', function () {
  validateRequiredProps(Main, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<Main {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Main')
    expect(wrapper.text()).toEqual('Default content')
  })
})
