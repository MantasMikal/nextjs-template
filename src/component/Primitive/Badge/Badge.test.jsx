import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import Badge from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Badge', () => {
  validateRequiredProps(Badge, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<Badge {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output additional className when `status` prop passed', () => {
    const { getByText } = render(<Badge {...requiredProps()} status="notice" />)
    expect(getByText('Default content')).toHaveClass('notice')
  })
})
