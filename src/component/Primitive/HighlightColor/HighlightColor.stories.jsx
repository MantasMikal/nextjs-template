import React from 'react'
import { storiesOf } from '@storybook/react'

import HighlightColor, { colors } from '.'

const stories = storiesOf('Core/HighlightColor', module)

stories.add(
  'Info',
  () => (
    <p>
      Example text with{' '}
      <HighlightColor color="primary">highlighted content</HighlightColor>.
    </p>
  ),
  {
    info: {
      inline: true,
      text: `
        Adds a visual \`colour\` change to child content.
      `
    }
  }
)

stories.add('All available colours', () => (
  <div>
    {colors.map((color) => (
      <p key={color}>
        Example text with{' '}
        <HighlightColor color={color}>
          highlighted content in {color}
        </HighlightColor>
        .
      </p>
    ))}
  </div>
))
