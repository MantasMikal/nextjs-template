import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import DateCard from '.'

const requiredProps = () => ({
  primary: 'Jan',
  secondary: '2',
  timestamp: '2020-01-02'
})

describe('Component: DateCard', () => {
  validateRequiredProps(DateCard, requiredProps())

  test('should output the expected markup with default props', () => {
    const { container, getByText } = render(<DateCard {...requiredProps()} />)
    expect(getByText('Jan')).toBeTruthy()
    expect(getByText('2')).toBeTruthy()
    expect(container.firstChild).toHaveAttribute('datetime', '2020-01-02')
  })
})
