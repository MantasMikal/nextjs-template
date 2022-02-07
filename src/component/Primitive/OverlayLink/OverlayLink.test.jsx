import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import OverlayLink from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: OverlayLink', () => {
  validateRequiredProps(OverlayLink, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<OverlayLink {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  // test('should output additional className when `foo` prop passed', () => {
  //   const { } = render(<OverlayLink {...requiredProps()} foo />)
  //   expect().toEqual()
  // })
})
