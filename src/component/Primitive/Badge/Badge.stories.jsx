import React from 'react'
import { storiesOf } from '@storybook/react'

import { StatusContextProvider } from '@/component/Context/StatusContext'

import Badge from '.'
import Icon from '../Icon'

const stories = storiesOf('Core/Badge', module)

stories.add('Info', () => <Badge status="success">Content</Badge>, {
  info: {
    inline: true,
    text: `
      Used to display one or more related pieces of content, often as static
      tags categories, or labels. Content should be ideally a single word.
    `
  }
})

stories.add('Default state', () => <Badge>Content</Badge>)

stories.add('With Icon', () => (
  <Badge>
    <Icon type="_placeholder" a11yText="" width={16} /> <span>Content</span>
  </Badge>
))

stories.add('Status text (direct)', () => (
  <Badge status="notice">Content</Badge>
))

stories.add('Status text (via context)', () => (
  <StatusContextProvider status="error">
    <Badge>Content</Badge>
  </StatusContextProvider>
))

stories.add('Minimum width', () => <Badge>i</Badge>)

stories.add('Line-wrapping', () => (
  <Badge>
    Lorem ipsum dolor sit amet, <br />
    consectetur adipiscing elit
  </Badge>
))
