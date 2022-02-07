import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import FieldAnswer from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: FieldAnswer', function () {
  validateRequiredProps(FieldAnswer, requiredProps())

  test('should output the expected markup with default props', function () {
    const { getByText } = render(<FieldAnswer {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })
})
