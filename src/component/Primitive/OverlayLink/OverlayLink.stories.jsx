import React from 'react'
import { storiesOf } from '@storybook/react'

import OverlayLink from '.'

import Placeholder from '@/component/Helper/Placeholder'
import Stack from '../Stack'

const stories = storiesOf('Core/OverlayLink', module)

stories.add(
  'Info',
  () => (
    <Placeholder height={200}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            h2:hover { background: orange; }
            button { background: blue; color: white } button:hover { background: red }
          `
        }}
      />
      <Stack>
        <h2>
          <OverlayLink href="#example">
            Heading with expanded hit-area
          </OverlayLink>
        </h2>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <button href="#example">Independently clickable button</button>
        </div>
      </Stack>
    </Placeholder>
  ),
  {
    info: {
      inline: true,
      text: `
        Wraps a child with a \`<SmartLink />\` whilst also creating a hit-area
        as large as possible (up to the closest non-static \`position\`).

        Useful to add a clickable area over an entire "Card"-like component,
        whilst maintaining accessible markup so screen readers still read the
        child content as the content of the link.

        Sibling elements can be positioned above the overlay if overlapping
        actions are required.

        Comes with a \`debug\` prop to more easily see how elements are layered.
      `
    }
  }
)

stories.add('Default state (with debug enabled)', () => (
  <Placeholder height={200}>
    <style
      dangerouslySetInnerHTML={{
        __html: `
            h2:hover { background: orange; }
            button { background: blue; color: white } button:hover { background: red }
          `
      }}
    />
    <Stack>
      <h2>
        <OverlayLink href="#example" debug>
          Heading with expanded hit-area
        </OverlayLink>
      </h2>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button href="#example">Independently clickable button</button>
      </div>
    </Stack>
  </Placeholder>
))
