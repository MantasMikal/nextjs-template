import React from 'react'
import { storiesOf } from '@storybook/react'
import Placeholder from '@/component/Helper/Placeholder'

import Grid from '.'

const stories = storiesOf('Layout/Grid', module)

stories.add(
  'Info',
  () => (
    <Grid gutter="default">
      {[...Array(4).keys()].map((i) => (
        <Grid.Item key={i} width={[1, 1 / 2, 1 / 4]}>
          <Placeholder height={80}>{i + 1}</Placeholder>
        </Grid.Item>
      ))}
    </Grid>
  ),
  {
    info: {
      inline: true,
      text: `
        A simple inline-block based responsive grid, with two possible
        interfaces for creating column widths.
      `
    }
  }
)

stories.add('Array of widths', () => (
  <Grid>
    <Grid.Item width={[1 / 2, null, 1 / 3]}>
      <Placeholder height={80} />
    </Grid.Item>
    <Grid.Item width={[1 / 2, null, 1 / 3]}>
      <Placeholder height={80} />
    </Grid.Item>
    <Grid.Item width={[1 / 2, null, 1 / 3]}>
      <Placeholder height={80} />
    </Grid.Item>
  </Grid>
))

stories.add('Named widths', () => (
  <Grid>
    <Grid.Item width={{ m: 1 / 2, d: 1 / 3 }}>
      <Placeholder height={80} />
    </Grid.Item>
    <Grid.Item width={{ m: 1 / 2, d: 1 / 3 }}>
      <Placeholder height={80} />
    </Grid.Item>
    <Grid.Item width={{ m: 1 / 2, d: 1 / 3 }}>
      <Placeholder height={80} />
    </Grid.Item>
  </Grid>
))

stories.add('Gutter', () => (
  <Grid gutter="default">
    <Grid.Item width={{ t: 1 / 3 }}>
      <Placeholder height={80} />
    </Grid.Item>
    <Grid.Item width={{ t: 1 / 3 }}>
      <Placeholder height={80} />
    </Grid.Item>
    <Grid.Item width={{ t: 1 / 3 }}>
      <Placeholder height={80} />
    </Grid.Item>
  </Grid>
))

stories.add('Reverse', () => (
  <Grid reverse>
    <Grid.Item width={{ t: 1 / 3 }}>
      <Placeholder height={80}>1</Placeholder>
    </Grid.Item>
    <Grid.Item width={{ t: 1 / 3 }}>
      <Placeholder height={80}>2</Placeholder>
    </Grid.Item>
    <Grid.Item width={{ t: 1 / 3 }}>
      <Placeholder height={80}>3</Placeholder>
    </Grid.Item>
  </Grid>
))

stories.add('Reverse (named range)', () => (
  <Grid reverse="d">
    <Grid.Item width={{ t: 1 / 3 }}>
      <Placeholder height={80}>1</Placeholder>
    </Grid.Item>
    <Grid.Item width={{ t: 1 / 3 }}>
      <Placeholder height={80}>2</Placeholder>
    </Grid.Item>
    <Grid.Item width={{ t: 1 / 3 }}>
      <Placeholder height={80}>3</Placeholder>
    </Grid.Item>
  </Grid>
))

stories.add('Nested', () => (
  <Grid gutter="default">
    <Grid.Item width={{ t: 1 / 3 }}>
      <Placeholder height={80}>1</Placeholder>
    </Grid.Item>
    <Grid.Item width={{ t: 1 / 3 }}>
      <Grid>
        <Grid.Item width={{ t: 1 / 3 }}>
          <Placeholder height={80}>2.1</Placeholder>
        </Grid.Item>
        <Grid.Item width={{ t: 1 / 3 }}>
          <Placeholder height={80}>2.1</Placeholder>
        </Grid.Item>
        <Grid.Item width={{ t: 1 / 3 }}>
          <Placeholder height={80}>2.3</Placeholder>
        </Grid.Item>
      </Grid>
    </Grid.Item>
    <Grid.Item width={{ t: 1 / 3 }}>
      <Placeholder height={80}>3</Placeholder>
    </Grid.Item>
  </Grid>
))
