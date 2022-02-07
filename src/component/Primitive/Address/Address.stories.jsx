import React from 'react'
import { storiesOf } from '@storybook/react'

import Address from '.'

const stories = storiesOf('Schema/Address', module)

stories.add(
  'Info',
  () => (
    <Address
      type="Organisation"
      name="Organisation Name"
      streetAddress="123 Street Name"
      addressLocality="Town"
      addressRegion="City, County"
      postalCode="PO57 CDE"
      addressCountry="UK"
    />
  ),
  {
    info: {
      inline: true,
      text: `
        Displays a person or organisation address, formatted using the
        PostalAddress schema.

        [schema.org/PostalAddress](https://schema.org/PostalAddress)
      `
    }
  }
)

stories.add('Default state', () => (
  <Address
    type="Organisation"
    name="Organisation Name"
    streetAddress="123 Street Name"
    addressLocality="Town"
    addressRegion="City, County"
    postalCode="PO57 CDE"
    addressCountry="UK"
  />
))
