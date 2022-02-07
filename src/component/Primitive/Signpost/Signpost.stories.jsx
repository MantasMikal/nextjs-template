import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Signpost from '.'

import Inline from '../Inline'

const stories = storiesOf('Specific/Signpost', module)

stories.add('Info', () => <Signpost icon="_placeholder">Content</Signpost>, {
  info: {
    inline: true,
    text: `
      TBC
    `
  }
})

stories.add('Default state', () => (
  <Signpost icon="_placeholder" onClick={action('clicked')}>
    Content
  </Signpost>
))

stories.add('Within an Inline', () => (
  <Inline>
    {[...Array(6).keys()].map((item) => (
      <Signpost key={item} icon="_placeholder" onClick={action('clicked')}>
        Content
      </Signpost>
    ))}
  </Inline>
))
