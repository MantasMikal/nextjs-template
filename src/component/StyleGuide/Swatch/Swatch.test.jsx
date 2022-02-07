import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import Swatch from '.'

const requiredProps = () => ({ color: '#123456' })

describe('Component: Swatch', function () {
  validateRequiredProps(Swatch, requiredProps())

  test('should output the expected markup when supplied hex colour', function () {
    const { getAllByRole } = render(<Swatch {...requiredProps()} />)
    const items = getAllByRole('listitem')
    expect(items).toHaveLength(3)
    expect(items[0]).toHaveTextContent('rgb(18, 52, 86)')
    expect(items[1]).toHaveTextContent('hsl(210, 65.4%, 20.4%)')
    expect(items[2]).toHaveTextContent('#123456')
  })

  test('should output the expected markup when supplied rgb colour', function () {
    const { getAllByRole } = render(<Swatch color="rgb(18, 52, 86)" />)
    const items = getAllByRole('listitem')
    expect(items).toHaveLength(3)
    expect(items[0]).toHaveTextContent('rgb(18, 52, 86)')
    expect(items[1]).toHaveTextContent('hsl(210, 65.4%, 20.4%)')
    expect(items[2]).toHaveTextContent('#123456')
  })

  test('should output the expected markup when supplied hsl colour', function () {
    const { getAllByRole } = render(<Swatch color="hsl(210, 65.4%, 20.4%)" />)
    const items = getAllByRole('listitem')
    expect(items).toHaveLength(3)
    expect(items[0]).toHaveTextContent('rgb(18, 52, 86)')
    expect(items[1]).toHaveTextContent('hsl(210, 65.4%, 20.4%)')
    expect(items[2]).toHaveTextContent('#123456')
  })

  test('should output `name` prop', function () {
    const { getByText } = render(
      <Swatch {...requiredProps()} name="Example colour" />
    )
    expect(getByText('Example colour')).toBeTruthy()
  })

  test('should output expected markup with semi-transparent colours', function () {
    const { container, getAllByRole } = render(<Swatch color="#123456aa" />)
    const items = getAllByRole('listitem')
    expect(items).toHaveLength(2)
    expect(items[0]).toHaveTextContent('rgba(18, 52, 86, 0.67)')
    expect(items[1]).toHaveTextContent('hsla(210, 65.4%, 20.4%, 0.67)')
    expect(container.firstChild).toHaveClass('hasAlpha')
  })
})
