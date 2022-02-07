import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import LoadingOverlay from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: LoadingOverlay', () => {
  validateRequiredProps(LoadingOverlay, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText, queryByText } = render(
      <LoadingOverlay {...requiredProps()} />
    )
    expect(getByText('Default content')).toBeTruthy()
    expect(queryByText('Loading…')).toBeNull()
  })

  test('should output the expected markup with default props', () => {
    const { getByText } = render(
      <LoadingOverlay {...requiredProps()} loading />
    )
    expect(getByText('Loading…')).toBeTruthy()
  })
})
