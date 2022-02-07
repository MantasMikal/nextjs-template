import React from 'react'
import { storiesOf } from '@storybook/react'

import Swatch from '.'

const stories = storiesOf('Style Guide/Swatch', module)

stories.add('Info', () => <Swatch name="Brand Purple" color="#9c5386aa" />, {
  info: {
    inline: true,
    text: `Displays a colour with a list of colour formats`
  }
})

stories.add('Default state', () => (
  <Swatch name="Brand Purple" color="#9c5386" />
))

stories.add('With transparency', () => (
  <Swatch name="Brand Purple" color="#9c538688" />
))
