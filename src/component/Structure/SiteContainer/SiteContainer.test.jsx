import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import SiteContainer from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: SiteContainer', function () {
  validateRequiredProps(SiteContainer, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<SiteContainer {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('SiteContainer')
    expect(wrapper.text()).toEqual('Default content')
  })
})
