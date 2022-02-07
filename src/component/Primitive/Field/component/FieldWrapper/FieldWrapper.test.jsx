import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import FieldWrapper from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: FieldWrapper', function () {
  validateRequiredProps(FieldWrapper, requiredProps())

  test('should output the expected markup with default props', function () {
    const { getByText } = render(<FieldWrapper {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output additional props as attributes', function () {
    const { container } = render(
      <FieldWrapper {...requiredProps()} id="exampleId" />
    )
    expect(container.firstChild).toHaveAttribute('id', 'exampleId')
  })

  test('should output additional styles when `status` prop passed', function () {
    const { container } = render(
      <FieldWrapper {...requiredProps()} status="error" />
    )
    expect(container.firstChild).toHaveClass('error')
  })
})
