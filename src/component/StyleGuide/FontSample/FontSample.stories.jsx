import React from 'react'
import { storiesOf } from '@storybook/react'

import FontSample from '.'

const stories = storiesOf('Style Guide/FontSample', module)

stories.add(
  'Info',
  () => <FontSample name="Georgia" stack="Georgia, serif" />,
  {
    info: {
      inline: true,
      text: `
        Displays common characters, ligatures, and sizes of a given font
        using a supplied font stack name.
      `
    }
  }
)

stories.add('Default state', () => <FontSample stack="Georgia, serif" />)
stories.add('Optional display name', () => (
  <FontSample name="Comic Sans" stack="Comic Sans, Comic Sans MS, sans-serif" />
))
