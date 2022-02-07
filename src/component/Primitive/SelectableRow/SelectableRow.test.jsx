import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import SelectableRow from '.'

const requiredProps = () => ({
  children: 'Default content',
  name: 'exampleName',
  value: 'Example Value'
})

describe('Component: SelectableRow', () => {
  validateRequiredProps(SelectableRow, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<SelectableRow {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  // test('should output additional className when `foo` prop passed', () => {
  //   const { } = render(<SelectableRow {...requiredProps()} foo />)
  //   expect().toEqual()
  // })
})
