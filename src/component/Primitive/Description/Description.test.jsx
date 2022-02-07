import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import Description from '.'

const requiredProps = () => ({
  children: 'Example content',
  term: 'Example term'
})

describe('Component: Description', function () {
  validateRequiredProps(Description, requiredProps())

  test('should output the expected markup with default props', function () {
    const { getByRole } = render(<Description {...requiredProps()} />)
    expect(getByRole('term')).toHaveTextContent('Example term')
    expect(getByRole('definition')).toHaveTextContent('Example content')
  })

  test('should output the expected markup when `icon` prop passed', function () {
    const { container } = render(
      <Description {...requiredProps()} icon="_placeholder" />
    )
    expect(container.querySelector('svg')).toBeTruthy()
  })
})
