import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ClickableControlWrapper from '.'

import TextControl from '../TextControl'

const stories = storiesOf('Form/ClickableControlWrapper', module)

stories.add(
  'Info',
  () => (
    <ClickableControlWrapper
      label="Example Label"
      onClick={action('Clicked')}
      control={
        <TextControl name="exampleText" type="text" value="Example value" />
      }
    />
  ),
  {
    info: {
      inline: true,
      text: `
        Wraps a read-only form control and adds adds onClick functionality
        as if the control was a button.

        Maintains accessibility of a button and ensures expected tabIndex.
      `
    }
  }
)

stories.add('Default state', () => (
  <ClickableControlWrapper
    label="Example Label"
    onClick={action('Clicked')}
    control={
      <TextControl name="exampleText" type="text" value="Example value" />
    }
  />
))
