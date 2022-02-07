import React from 'react'
import { storiesOf } from '@storybook/react'

import FixedFooter from '.'
import Placeholder from '@/component/Helper/Placeholder'

const stories = storiesOf('Specific/FixedFooter', module)

stories.add('Info', () => <>See examples</>, {
  info: {
    inline: true,
    text: `
      An element which becomes fixed to the bottom of the viewport when its
      natural location is below the bottom of the viewport. When the natural
      location is scrolled into view, the fixed element no longer acts fixed.
    `
  }
})

stories.add('Default state', () => (
  <>
    <Placeholder height="120vh">Regular content</Placeholder>
    <FixedFooter>
      <Placeholder height="calc(20vh + 10px)">Sticky content</Placeholder>
    </FixedFooter>
    <Placeholder height="50vh">Additional regular content</Placeholder>
  </>
))
