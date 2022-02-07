import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import HighlightColor from '.'

const requiredProps = () => ({ children: 'Default content', color: 'primary' })

describe('Component: HighlightColor', () => {
  validateRequiredProps(HighlightColor, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<HighlightColor {...requiredProps()} />)
    expect(getByText('Default content')).toHaveClass('primary')
  })
})
