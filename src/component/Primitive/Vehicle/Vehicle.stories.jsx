import React from 'react'
import { storiesOf } from '@storybook/react'

import Vehicle from '.'

const stories = storiesOf('Schema/Vehicle', module)

stories.add(
  'Info',
  () => (
    <Vehicle
      name="2009 Volkswagen Golf V GTI MY09 Direct-Shift Gearbox"
      color="Black"
      vehicleTransmission="Automatic-DSG"
      vehicleEngine="4 cylinder Petrol Turbo Intercooled 2.0 L (1984 cc)"
      productionDate="2019"
    />
  ),
  {
    info: {
      inline: true,
      text: `
        Displays information about a particular vehicle, using the Vehicle
        schema.

        [schema.org/docs/automotive.html](https://schema.org/docs/automotive.html)
      `
    }
  }
)

stories.add('Default state', () => (
  <Vehicle
    name="2009 Volkswagen Golf V GTI MY09 Direct-Shift Gearbox"
    color="Black"
    vehicleTransmission="Automatic-DSG"
    vehicleEngine="4 cylinder Petrol Turbo Intercooled 2.0 L (1984 cc)"
    productionDate="2019"
  />
))
