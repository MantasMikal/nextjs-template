import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import FieldAssistance from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: FieldAssistance', function () {
  validateRequiredProps(FieldAssistance, requiredProps())

  test('should output the expected markup with default props', function () {
    const { getByText } = render(<FieldAssistance {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })
})
