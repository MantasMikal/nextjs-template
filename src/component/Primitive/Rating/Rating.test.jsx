import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import Rating from '.'

const requiredProps = () => ({})

const defaultProps = () => ({
  rating: 59,
  total: 100
})

describe('Component: Rating', () => {
  validateRequiredProps(Rating, requiredProps())

  test('should output the expected markup with default props', () => {
    const { container, getByText } = render(
      <Rating {...requiredProps()} {...defaultProps()} />
    )
    expect(getByText('Rating: 59/100')).toBeTruthy()
    expect(container.querySelectorAll('svg')).toHaveLength(5)
  })
})
