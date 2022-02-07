import React from 'react'
import { storiesOf } from '@storybook/react'

import SeparatedStack from '.'

const stories = storiesOf('Layout/SeparatedStack', module)

stories.add(
  'Info',
  () => (
    <SeparatedStack>
      {[...Array(4).keys()].map((i) => (
        <p key={i}>Item {i}</p>
      ))}
    </SeparatedStack>
  ),
  {
    info: {
      inline: true,
      text: `
        A wrapper component which adds horizontal borders (but no additional
        spacing) to children.
      `
    }
  }
)

stories.add('Default', () => (
  <SeparatedStack>
    {[...Array(4).keys()].map((i) => (
      <p key={i}>Item {i}</p>
    ))}
  </SeparatedStack>
))

stories.add('Leading separator', () => (
  <SeparatedStack leading>
    {[...Array(4).keys()].map((i) => (
      <p key={i}>Item {i}</p>
    ))}
  </SeparatedStack>
))

stories.add('Trailing separator', () => (
  <SeparatedStack trailing>
    {[...Array(4).keys()].map((i) => (
      <p key={i}>Item {i}</p>
    ))}
  </SeparatedStack>
))
