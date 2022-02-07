import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import Position from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Position', function () {
  validateRequiredProps(Position, requiredProps())

  test('should output the expected markup with default props', function () {
    const { container, getByText } = render(<Position {...requiredProps()} />)
    expect(container.firstChild).toHaveClass('static')
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output the expected class when `absolute`', function () {
    const { container } = render(<Position {...requiredProps()} absolute />)
    expect(container.firstChild).toHaveClass('absolute')
  })

  test('should output the expected class when `fixed`', function () {
    const { container } = render(<Position {...requiredProps()} fixed />)
    expect(container.firstChild).toHaveClass('fixed')
  })

  test('should output the expected class when `relative`', function () {
    const { container } = render(<Position {...requiredProps()} relative />)
    expect(container.firstChild).toHaveClass('relative')
  })

  test('should output the expected class when `sticky`', function () {
    const { container } = render(<Position {...requiredProps()} sticky />)
    expect(container.firstChild).toHaveClass('sticky')
  })

  test('should allow additional styles to be passed', function () {
    const { container } = render(
      <Position
        {...requiredProps()}
        style={{ top: '10px', right: 20, zIndex: 1 }}
      />
    )
    expect(container.firstChild).toHaveStyle({
      top: '10px',
      right: '20px',
      zIndex: '1'
    })
  })
})
