import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import Footer from '.'

const requiredProps = () => ({})

describe('Component: Footer', function () {
  validateRequiredProps(Footer, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<Footer {...requiredProps()} />)
    expect(wrapper.type()).toEqual('footer')
  })
})
