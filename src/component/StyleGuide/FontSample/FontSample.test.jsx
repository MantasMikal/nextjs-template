import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import FontSample from '.'

const requiredProps = () => ({ stack: 'Comic Sans, cursive' })

describe('Component: FontSample', () => {
  validateRequiredProps(FontSample, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<FontSample {...requiredProps()} />)
    expect(getByText('Font Sample: Comic Sans, cursive')).toBeTruthy()
    expect(getByText('AaBb')).toHaveStyle({ fontFamily: 'Comic Sans, cursive' })
  })

  test('should output a custom display name if provided', () => {
    const { getByText } = render(
      <FontSample {...requiredProps()} name="Example Name" />
    )
    expect(getByText('Font Sample: Example Name')).toBeTruthy()
    expect(getByText('AaBb')).toHaveStyle({ fontFamily: 'Comic Sans, cursive' })
  })
})
