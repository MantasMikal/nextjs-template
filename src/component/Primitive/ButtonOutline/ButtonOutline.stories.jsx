import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ButtonOutline from '.'

const stories = storiesOf('Core/ButtonOutline', module)

stories.add('Info', () => <ButtonOutline>Outline Button</ButtonOutline>, {
  info: {
    inline: true,
    text: `
      Basic outlined button component, building on the ButtonBase component.
    `
  }
})

stories.add('As an anchor', () => (
  <ButtonOutline href="#">Anchor</ButtonOutline>
))

stories.add('As a button', () => (
  <ButtonOutline onClick={action('clicked')}>Button</ButtonOutline>
))

stories.add('With wrapping text', () => (
  <ButtonOutline>
    Text
    <br />
    Wrapping
  </ButtonOutline>
))

stories.add('Block (full-width)', () => (
  <ButtonOutline block>Block Button</ButtonOutline>
))

stories.add('Disabled', () => (
  <ButtonOutline disabled>Disabled Button</ButtonOutline>
))
