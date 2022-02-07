import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import CustomSelectControl from '.'

const requiredProps = () => ({})

describe('Component: CustomSelectControl', function () {
  validateRequiredProps(CustomSelectControl, requiredProps())

  test('should add expected default props', function () {
    const wrapper = shallow(
      <CustomSelectControl {...requiredProps()} name="example">
        <option>Example 1</option>
      </CustomSelectControl>
    )
    expect(wrapper.type()).toEqual('span')
    expect(wrapper.find('NativeSelectControl')).toHaveLength(1)
    expect(wrapper.find('option')).toHaveLength(1)
    expect(wrapper.prop('className')).toEqual('CustomSelectControl')
  })

  test('should output additional styles when `multiple` prop passed', function () {
    const wrapper = shallow(
      <CustomSelectControl {...requiredProps()} name="example" multiple>
        <option>Example 1</option>
      </CustomSelectControl>
    )
    expect(wrapper.prop('className')).toEqual('CustomSelectControl multiple')
  })

  test('should output expected styles when `status` passed', function () {
    const wrapper = shallow(
      <CustomSelectControl {...requiredProps()} status="error" name="example">
        <option>Example 1</option>
      </CustomSelectControl>
    )
    expect(wrapper.prop('className')).toEqual('CustomSelectControl error')
  })
})
