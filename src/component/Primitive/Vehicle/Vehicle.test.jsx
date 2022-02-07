import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import Vehicle from '.'

const requiredProps = () => ({
  name: 'Example Vehicle Name'
})

describe('Component: Vehicle', () => {
  validateRequiredProps(Vehicle, requiredProps())

  test('should output the expected markup with minimal props', () => {
    const { container, getByText } = render(<Vehicle {...requiredProps()} />)
    expect(container.firstChild).toHaveAttribute(
      'itemType',
      'http://schema.org/Vehicle'
    )
    expect(getByText('Example Vehicle Name')).toBeTruthy()
  })

  test('should output the expected markup with all props', () => {
    const { container, getByText } = render(
      <Vehicle
        {...requiredProps()}
        color="Black"
        productionDate="2020"
        src="image.jpg"
        vehicleEngine="4 cylinder Petrol"
        vehicleTransmission="Automatic"
      />
    )
    expect(container.firstChild).toHaveAttribute(
      'itemType',
      'http://schema.org/Vehicle'
    )
    expect(getByText('Example Vehicle Name')).toHaveAttribute(
      'itemProp',
      'name'
    )
    expect(getByText('Black')).toHaveAttribute('itemProp', 'color')
    expect(getByText('2020')).toHaveAttribute('itemProp', 'productionDate')
    expect(getByText('4 cylinder Petrol')).toHaveAttribute('itemProp', 'name')
    expect(getByText('Automatic')).toHaveAttribute(
      'itemProp',
      'vehicleTransmission'
    )
  })
})
