import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import GridWrapper from '.'
import Grid from '../..'

const requiredProps = () => ({
  children: <Grid.Item>Default content</Grid.Item>
})

describe('Component: GridWrapper', () => {
  validateRequiredProps(GridWrapper, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<GridWrapper {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output additional className when `gutter` prop passed', () => {
    const { container } = render(
      <GridWrapper {...requiredProps()} gutter="default" />
    )
    expect(container.firstChild).toHaveClass('gutter-default')
  })

  test('should output additional className when `reverse` prop passed as bool', () => {
    const { container } = render(<GridWrapper {...requiredProps()} reverse />)
    expect(container.firstChild).toHaveClass('reverse')
  })

  test('should output additional className when `reverse` prop passed as string', () => {
    const { container } = render(
      <GridWrapper {...requiredProps()} reverse="d" />
    )
    expect(container.firstChild).toHaveClass('reverse-d')
  })
})
