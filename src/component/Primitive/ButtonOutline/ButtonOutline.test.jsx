import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import ButtonOutline from '.'

const requiredProps = () => ({})

const defaultProps = () => ({ children: 'Example content' })

describe('Component: ButtonOutline', function () {
  validateRequiredProps(ButtonOutline, requiredProps())

  test('should output the expected markup with default props', function () {
    const { getByRole, getByText } = render(
      <ButtonOutline {...requiredProps()} {...defaultProps()} />
    )
    expect(getByRole('button')).toBeTruthy()
    expect(getByText('Example content')).toBeTruthy()
  })

  test('should output additional className when `disabled` prop passed', function () {
    const { getByRole } = render(
      <ButtonOutline {...requiredProps()} {...defaultProps()} disabled />
    )
    expect(getByRole('button')).toBeDisabled()
    expect(getByRole('button')).toHaveClass('disabled')
  })
})
