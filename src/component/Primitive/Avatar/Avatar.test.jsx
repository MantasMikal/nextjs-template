import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import Avatar from '.'

const requiredProps = () => ({ name: 'Firstname Lastname' })

describe('Component: Avatar', () => {
  validateRequiredProps(Avatar, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByTitle, queryByLabelText } = render(
      <Avatar {...requiredProps()} />
    )
    expect(getByTitle('Firstname Lastname')).toBeTruthy()
    expect(queryByLabelText('Initials')).toBeNull()
  })

  test('should output the expected markup when `initials` prop passed with one character', () => {
    const { container, getByText } = render(
      <Avatar {...requiredProps()} initials="A" />
    )
    expect(getByText('A')).toBeTruthy()
    expect(container.firstChild).toHaveStyle('font-size: 22px;')
  })

  test('should output the expected markup when `initials` prop passed with two characters', () => {
    const { container, getByText } = render(
      <Avatar {...requiredProps()} initials="AB" />
    )
    expect(getByText('AB')).toBeTruthy()
    expect(container.firstChild).toHaveStyle('font-size: 22px;')
  })

  test('should output the expected markup when `initials` prop passed with three characters', () => {
    const { container, getByText } = render(
      <Avatar {...requiredProps()} initials="ABC" />
    )
    expect(getByText('ABC')).toBeTruthy()
    expect(container.firstChild).toHaveStyle('font-size: 15px;')
  })

  test('should output the expected markup when `initials` prop passed with three characters', () => {
    const { container, getByText } = render(
      <Avatar {...requiredProps()} initials="ABCD" />
    )
    expect(getByText('ABCD')).toBeTruthy()
    expect(container.firstChild).toHaveStyle('font-size: 11px;')
  })

  test('should output the expected markup when `initials` prop passed with three characters', () => {
    const { container, getByText } = render(
      <Avatar {...requiredProps()} initials="ABC" />
    )
    expect(getByText('ABC')).toBeTruthy()
    expect(container.firstChild).toHaveStyle('font-size: 15px;')
  })

  test('should output the expected markup when `src` prop passed', () => {
    const { container } = render(
      <Avatar {...requiredProps()} src="/image.jpg" />
    )
    expect(container.firstChild).toHaveStyle(
      'background-image: url(/image.jpg);'
    )
  })

  test('should output the expected markup when `size` prop passed', () => {
    const { container } = render(<Avatar {...requiredProps()} size={96} />)
    expect(container.firstChild).toHaveStyle('width: 96px;')
    expect(container.firstChild).toHaveStyle('height: 96px;')
    expect(container.firstChild).toHaveStyle('line-height: 96px;')
  })

  test('should output the expected markup when `borderRadius` prop passed', () => {
    const { container } = render(
      <Avatar {...requiredProps()} borderRadius={10} />
    )
    expect(container.firstChild).toHaveStyle('border-radius: 10px;')
  })

  test('should output additional styles when `backgroundColor` prop passed', () => {
    const { container } = render(
      <Avatar {...requiredProps()} backgroundColor="#ff0" />
    )
    expect(container.firstChild).toHaveStyle('background-color: #ff0;')
  })

  test('should output additional styles when `color` prop passed', () => {
    const { container } = render(<Avatar {...requiredProps()} color="#333" />)
    expect(container.firstChild).toHaveStyle('color: #333;')
  })
})
