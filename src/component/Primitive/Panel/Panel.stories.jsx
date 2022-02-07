import React from 'react'
import { storiesOf } from '@storybook/react'

import Panel from '.'

import Placeholder from '@/component/Helper/Placeholder'
import List from '../List'
import Stack from '../Stack'

const stories = storiesOf('Specific/Panel', module)

stories.add(
  'Info',
  () => (
    <Panel title="Panel Title" expandable>
      <Placeholder height={100} />
    </Panel>
  ),
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
  <Panel title="Panel Title">
    <Placeholder height={100} />
  </Panel>
))

stories.add('Expander', () => (
  <Panel title="Panel Title" expandable>
    <Placeholder height={100} />
  </Panel>
))

stories.add('Expander (starts collapsed)', () => (
  <Panel title="Panel Title" expandable startCollapsed>
    <Placeholder height={100} />
  </Panel>
))

stories.add('Highlighted', () => (
  <Panel title="Panel Title" highlighted>
    <Placeholder height={100} />
  </Panel>
))

stories.add('No header', () => (
  <Panel>
    <Stack>
      <Placeholder height={100} />
      <h3>Example title</h3>
      <List unstyled>
        <li>Red</li>
        <li>Green</li>
        <li>Blue</li>
      </List>
    </Stack>
  </Panel>
))
