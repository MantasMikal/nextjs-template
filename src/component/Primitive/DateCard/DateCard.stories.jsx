import React from 'react'
import { storiesOf } from '@storybook/react'

import DateCard from '.'

const stories = storiesOf('Specific/DateCard', module)

stories.add(
  'Info',
  () => <DateCard primary="Mon" secondary="18" timestamp="2020-05-18" />,
  {
    info: {
      inline: true,
      text: `
      TBC
    `
    }
  }
)

stories.add('Default state', () => (
  <DateCard primary="Sept" secondary="20" timestamp="2020-09-20" />
))
