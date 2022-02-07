import React from 'react'
import { storiesOf } from '@storybook/react'

import VideoLooper from '.'

const stories = storiesOf('Specific/VideoLooper', module)

stories.addDecorator((story) => <div style={{ maxWidth: 480 }}>{story()}</div>)

stories.add(
  'Info',
  () => (
    <VideoLooper
      muted
      ratio={348 / 480}
      poster="https://img.clock.co.uk/480x348"
      src="https://media0.giphy.com/media/bi6RQ5x3tqoSI/giphy.mp4"
    />
  ),
  {
    info: {
      inline: true,
      text: `
        Emulates an animated GIF, using HTML \`<video>\`.

        Can optionally include controls for looping, restarting, progress as
        well as other video functionality.
      `
    }
  }
)

stories.add('Default State', () => (
  <VideoLooper
    muted
    ratio={348 / 480}
    poster="https://img.clock.co.uk/480x348"
    src="https://media0.giphy.com/media/bi6RQ5x3tqoSI/giphy.mp4"
  />
))

stories.add('Autoplay (once)', () => (
  <VideoLooper
    muted
    ratio={348 / 480}
    autoPlay
    poster="https://img.clock.co.uk/480x348"
    src="https://media0.giphy.com/media/bi6RQ5x3tqoSI/giphy.mp4"
  />
))

stories.add('Autoplay (looping)', () => (
  <VideoLooper
    muted
    ratio={348 / 480}
    loop
    autoPlay
    poster="https://img.clock.co.uk/480x348"
    src="https://media0.giphy.com/media/bi6RQ5x3tqoSI/giphy.mp4"
  />
))

stories.add('Alternate controls', () => (
  <VideoLooper
    muted
    ratio={348 / 480}
    autoPlay
    poster="https://img.clock.co.uk/480x348"
    src="https://media0.giphy.com/media/bi6RQ5x3tqoSI/giphy.mp4"
    smallAction
  />
))

stories.add('Progress', () => (
  <VideoLooper
    muted
    ratio={348 / 480}
    autoPlay
    poster="https://img.clock.co.uk/480x348"
    src="https://media0.giphy.com/media/bi6RQ5x3tqoSI/giphy.mp4"
    showProgress
  />
))
