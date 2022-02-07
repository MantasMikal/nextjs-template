import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import SplitHero from '.'

const requiredProps = () => ({ title: 'Default content' })

describe('Component: SplitHero', () => {
  validateRequiredProps(SplitHero, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<SplitHero {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  // test('should output additional className when `foo` prop passed', () => {
  //   const { } = render(<SplitHero {...requiredProps()} foo />)
  //   expect().toEqual()
  // })
})
