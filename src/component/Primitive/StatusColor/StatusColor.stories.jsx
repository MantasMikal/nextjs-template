import React from 'react'
import { storiesOf } from '@storybook/react'

import { StatusContextProvider } from '@/component/Context/StatusContext'

import StatusColor from '.'

const stories = storiesOf('Core/StatusColor', module)

stories.add('Info', () => <StatusColor status="success">Content</StatusColor>, {
  info: {
    inline: true,
    text: `
      Takes a status, either directly or via a context provider, to use as the
      CSS \`color\` property.
    `
  }
})

stories.add('Status (direct)', () => (
  <StatusColor status="notice">Content</StatusColor>
))

stories.add('Status (via context)', () => (
  <StatusContextProvider status="error">
    <StatusColor>Content</StatusColor>
  </StatusContextProvider>
))

stories.add('Status (all)', () =>
  ['none', 'success', 'notice', 'warning', 'error'].map((status) => (
    <StatusColor key={`status-${status}`} status={status}>
      Content
    </StatusColor>
  ))
)
