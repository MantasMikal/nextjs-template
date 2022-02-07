import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import Ellipsis from './'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Ellipsis', function () {
  validateRequiredProps(Ellipsis, requiredProps())

  test('should output the expected markup with default props', function () {
    const { getByText } = render(<Ellipsis {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output additional styles if `maxWidth` set a number', function () {
    const { getByText } = render(
      <Ellipsis {...requiredProps()} maxWidth={200} />
    )
    expect(getByText('Default content')).toHaveStyle({ maxWidth: '200px' })
  })

  test('should output additional styles if `maxWidth` set as string', function () {
    const { getByText } = render(
      <Ellipsis {...requiredProps()} maxWidth="20%" />
    )
    expect(getByText('Default content')).toHaveStyle({ maxWidth: '20%' })
  })
})
