import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import NativeSelectControl from '.'

const requiredProps = () => ({
  children: <option>Example 1</option>,
  name: 'example'
})

describe('Component: NativeSelectControl', function () {
  validateRequiredProps(NativeSelectControl, requiredProps())

  test('should add expected default props', function () {
    const wrapper = shallow(<NativeSelectControl {...requiredProps()} />)
    expect(wrapper.type()).toEqual('select')
    expect(wrapper.prop('placeholder')).toEqual(undefined)
    expect(wrapper.find('option')).toHaveLength(1)
    expect(wrapper.prop('className')).toEqual('NativeSelectControl')
  })

  test('should output additional styles when `multiple` prop passed', function () {
    const wrapper = shallow(
      <NativeSelectControl {...requiredProps()} multiple />
    )
    expect(wrapper.prop('className')).toEqual('NativeSelectControl multiple')
  })

  test('should output expected styles when `status` passed', function () {
    const wrapper = shallow(
      <NativeSelectControl {...requiredProps()} status="error" />
    )
    expect(wrapper.prop('className')).toEqual('NativeSelectControl error')
  })

  test('should add additional classes when `className` passed', function () {
    const wrapper = shallow(
      <NativeSelectControl {...requiredProps()} className="additional" />
    )
    expect(wrapper.prop('className')).toEqual('NativeSelectControl additional')
  })
})
