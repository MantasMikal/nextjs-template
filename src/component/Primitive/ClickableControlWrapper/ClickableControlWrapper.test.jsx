import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import ClickableControlWrapper from '.'

const requiredProps = () => ({
  control: <input />,
  label: 'Default label',
  onClick: () => {}
})

describe('Component: ClickableControlWrapper', () => {
  validateRequiredProps(ClickableControlWrapper, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByRole, getByText } = render(
      <ClickableControlWrapper {...requiredProps()} />
    )
    expect(getByText('Default label')).toBeTruthy()
    expect(getByRole('button')).toBeTruthy()
  })

  // test('should output additional className when `foo` prop passed', () => {
  //   const { } = render(<ClickableControlWrapper {...requiredProps()} foo />)
  //   expect().toEqual()
  // })
})
