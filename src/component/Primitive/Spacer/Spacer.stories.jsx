import React from 'react'
import { storiesOf } from '@storybook/react'
import Placeholder from '@/component/Helper/Placeholder'

import Spacer from '.'

const stories = storiesOf('Layout/Spacer', module)

stories.add(
  'Info',
  () => (
    <div style={{ outline: '1px dotted lime' }}>
      <Spacer px={2} pt={1} pb="5px">
        <Placeholder height={160} />
      </Spacer>
    </div>
  ),
  {
    info: {
      inline: true,
      text: `
        A wrapper component which can be used to provide margin or padding where
        required.

        Values passed as numbers will be multiplied by the project’s default
        spacing unit to allow for easy consistency. Values passed as strings
        will be output without modification.
      `
    }
  }
)

stories.add('Margin: 2x spacing unit', () => (
  <div>
    <Spacer m={2}>
      <Placeholder height={160} />
    </Spacer>
  </div>
))

stories.add('Padding: 2x spacing unit', () => (
  <div>
    <Spacer p={2}>
      <Placeholder height={160} />
    </Spacer>
  </div>
))

stories.add('As a custom element', () => (
  <div>
    <Spacer as="header" p={2}>
      <Placeholder height={160} />
    </Spacer>
  </div>
))
