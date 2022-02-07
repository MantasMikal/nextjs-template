// import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
// import { render } from '@testing-library/react'
import FixedFooter from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: FixedFooter', () => {
  validateRequiredProps(FixedFooter, requiredProps())

  // test('should output the expected markup with default props', () => {
  //   const { getByText } = render(<FixedFooter {...requiredProps()} />)
  //   expect(getByText('Default content')).toBeTruthy()
  // })

  // test('should output additional className when `foo` prop passed', () => {
  //   const { } = render(<FixedFooter {...requiredProps()} foo />)
  //   expect().toEqual()
  // })
})
