import React from 'react'
import { storiesOf } from '@storybook/react'

import Rating from '.'

const stories = storiesOf('Specific/Rating', module)

stories.add('Info', () => <Rating count={5} rating={7} total={10} />, {
  info: {
    inline: true,
    text: `
      A visual representation of a rating, formatted across a variable
      amount of items. Includes a visually hidden text-only representation of
      the unformatted rating.
    `
  }
})

stories.add('Empty (default state)', () => <Rating />)

stories.add('Partial (whole-item value)', () => <Rating rating={3} total={5} />)

stories.add('Partial (mid-item value)', () => <Rating rating={2.5} total={5} />)

stories.add('Full', () => <Rating rating={5} total={5} />)

stories.add('Using custom count value', () => (
  <Rating count={7} rating={35} total={100} />
))
