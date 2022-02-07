import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'

import TextFieldTemplate from './'
import Field from '../../Field'

const requiredProps = () => ({
  controlName: 'example',
  children: <input />,
  label: 'Example'
})

describe('Component: TextFieldTemplate', function () {
  validateRequiredProps(TextFieldTemplate, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<TextFieldTemplate {...requiredProps()} />)
    expect(wrapper.prop('id')).toEqual('field--example')
    expect(wrapper.find('TextFieldTemplateQuestion')).toHaveLength(1)
    expect(
      wrapper.find('VisuallyHidden TextFieldTemplateQuestion')
    ).toHaveLength(0)
    expect(
      wrapper.find('TextFieldTemplateQuestion').dive().prop('htmlFor')
    ).toEqual('example')
    expect(
      wrapper.find('TextFieldTemplateQuestion').dive().find(Field.Required)
    ).toHaveLength(0)
  })

  test('should output the expected markup when optional props passed', function () {
    const wrapper = shallow(
      <TextFieldTemplate
        {...requiredProps()}
        status="error"
        required
        assistance="Example Assistance"
        feedback="Example Feedback"
      />
    )
    expect(wrapper.prop('status')).toEqual('error')
    expect(
      wrapper.find('TextFieldTemplateQuestion').dive().find(Field.Required)
    ).toHaveLength(1)
    expect(wrapper.find(Field.Assistance)).toHaveLength(1)
    expect(wrapper.find(Field.Feedback)).toHaveLength(1)
  })

  test('should hide FieldQuestion if hideLabel prop passed', function () {
    const wrapper = shallow(
      <TextFieldTemplate {...requiredProps()} hideLabel />
    )
    expect(
      wrapper.find('VisuallyHidden TextFieldTemplateQuestion')
    ).toHaveLength(1)
  })
})
