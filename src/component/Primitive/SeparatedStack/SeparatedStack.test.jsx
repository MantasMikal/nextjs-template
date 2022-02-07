import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import SeparatedStack from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: SeparatedStack', function () {
  validateRequiredProps(SeparatedStack, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<SeparatedStack {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output the expected markup with multiple children', () => {
    const { getAllByRole } = render(
      <SeparatedStack>
        <button />
        <button />
        <button />
      </SeparatedStack>
    )
    expect(getAllByRole('button')).toHaveLength(3)
  })
})
