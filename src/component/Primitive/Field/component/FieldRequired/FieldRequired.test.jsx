import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import FieldRequired from '.'

const requiredProps = () => ({})

describe('Component: FieldRequired', function () {
  validateRequiredProps(FieldRequired, requiredProps())

  test('should output the expected markup with default props', function () {
    const { getByTitle } = render(<FieldRequired {...requiredProps()} />)
    expect(getByTitle('This field is required')).toBeTruthy()
  })
})
