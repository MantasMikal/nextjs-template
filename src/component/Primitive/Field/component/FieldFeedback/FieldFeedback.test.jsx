import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import FieldFeedback from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: FieldFeedback', function () {
  validateRequiredProps(FieldFeedback, requiredProps())

  test('should output the expected markup with default props', function () {
    const { getByText } = render(<FieldFeedback {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output additional className when `status` prop passed', function () {
    const { container } = render(
      <FieldFeedback {...requiredProps()} status="success" />
    )
    expect(container.firstChild).toHaveClass('success')
  })
})
