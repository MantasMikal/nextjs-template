import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import UserSelect from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: UserSelect', function () {
  validateRequiredProps(UserSelect, requiredProps())

  test('should output the expected markup with default props', function () {
    const { container, getByText } = render(<UserSelect {...requiredProps()} />)
    expect(container.firstChild).toHaveClass('auto')
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output the expected markup with `all` prop set', function () {
    const { container } = render(<UserSelect {...requiredProps()} all />)
    expect(container.firstChild).toHaveClass('all')
  })

  test('should output the expected markup with `none` prop set', function () {
    const { container } = render(<UserSelect {...requiredProps()} none />)
    expect(container.firstChild).toHaveClass('none')
  })

  test('should output the expected markup with `text` prop set', function () {
    const { container } = render(<UserSelect {...requiredProps()} text />)
    expect(container.firstChild).toHaveClass('text')
  })
})
