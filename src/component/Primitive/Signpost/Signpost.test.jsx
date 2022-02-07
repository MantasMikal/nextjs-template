import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import Signpost from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Signpost', () => {
  validateRequiredProps(Signpost, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<Signpost {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  // test('should output additional className when `foo` prop passed', () => {
  //   const { } = render(<Signpost {...requiredProps()} foo />)
  //   expect().toEqual()
  // })
})
