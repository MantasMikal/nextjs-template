import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import GridItem from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: GridItem', () => {
  validateRequiredProps(GridItem, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<GridItem {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output additional className when array of widths passed', () => {
    const { container } = render(
      <GridItem {...requiredProps()} width={[1 / 2]} />
    )
    expect(container.firstChild).toHaveClass('m-50')
  })

  test('should not fail when array with too many widths passed', () => {
    const { container } = render(
      <GridItem {...requiredProps()} width={[1 / 2, 1 / 3, 1 / 4, 1 / 5]} />
    )
    expect(container.firstChild).toHaveClass('m-50 t-33 d-25')
  })

  test('should output additional className when object of widths passed', () => {
    const { container } = render(
      <GridItem {...requiredProps()} width={{ m: 1 / 2 }} />
    )
    expect(container.firstChild).toHaveClass('m-50')
  })

  // test('should not fail when unrecognised width format passed', () => {
  //   const { container } = render(<GridItem {...requiredProps()} width={1} />)
  //   expect(container.firstChild).toHaveClass('GridItem')
  // })
})
