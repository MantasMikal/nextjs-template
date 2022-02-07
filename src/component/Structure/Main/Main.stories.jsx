import React from 'react'
import { storiesOf } from '@storybook/react'

import Main from '.'

const stories = storiesOf('Structure/Main', module)

stories.add('Info', () => <Main>Example Content</Main>, {
  info: {
    inline: true,
    text: `
      Wraps the content area or a page/view. Has no visual output - is used for
      semantics/accessibility.
    `
  }
})

stories.add('Default state', () => <Main>Example Content</Main>)
