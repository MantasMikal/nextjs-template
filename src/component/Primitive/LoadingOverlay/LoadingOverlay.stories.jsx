import React from 'react'
import { storiesOf } from '@storybook/react'

import LoadingOverlay from '.'
import Placeholder from '@/component/Helper/Placeholder'

const stories = storiesOf('Core/LoadingOverlay', module)

stories.add(
  'Info',
  () => (
    <LoadingOverlay loading>
      <Placeholder height={300}>Example content</Placeholder>
    </LoadingOverlay>
  ),
  {
    info: {
      inline: true,
      text: `
        A wrapper for other components. When passed the \`loading\` prop, it
        disables mouse/touch functionality of child components and overlays a
        loading indicator.
      `
    }
  }
)

stories.add('Active state', () => (
  <LoadingOverlay loading>
    <Placeholder height={300}>Example content</Placeholder>
  </LoadingOverlay>
))

stories.add('Inactive state', () => (
  <LoadingOverlay>
    <Placeholder height={300}>Example content</Placeholder>
  </LoadingOverlay>
))
