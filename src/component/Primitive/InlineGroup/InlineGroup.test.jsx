import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import InlineGroup from '.'

const requiredProps = () => ({
  children: [<button key="1">One</button>, <button key="2">Two</button>]
})

describe('Component: InlineGroup', () => {
  validateRequiredProps(InlineGroup, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getAllByRole } = render(<InlineGroup {...requiredProps()} />)
    expect(getAllByRole('button')).toHaveLength(2)
  })

  test('should output the expected markup with default props', () => {
    const { container } = render(<InlineGroup {...requiredProps()} block />)
    expect(container.firstChild).toHaveClass('block')
  })

  test('should output the expected markup with default props', () => {
    const { container } = render(<InlineGroup {...requiredProps()} even />)
    expect(container.firstChild).toHaveClass('even')
  })
})
