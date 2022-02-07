import React from 'react'
import { storiesOf } from '@storybook/react'

import SiteContainer from '.'

const stories = storiesOf('Structure/SiteContainer', module)

stories.add('Info', () => <SiteContainer>Example content</SiteContainer>, {
  info: {
    inline: true,
    text: `
        Used as a top-level wrapper to ensure min-height is at least as tall as
        the viewport.
      `
  }
})

stories.add('Default state', () => (
  <SiteContainer>Example Content</SiteContainer>
))
