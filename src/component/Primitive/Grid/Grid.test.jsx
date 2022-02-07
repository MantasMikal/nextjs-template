import React from 'react'
import { render } from '@testing-library/react'
import Grid from '.'

describe('Component: Grid', function () {
  test('should output the expected markup with default props', function () {
    const { getAllByText } = render(
      <Grid>
        <Grid.Item>Child</Grid.Item>
        <Grid.Item>Child</Grid.Item>
      </Grid>
    )
    expect(getAllByText('Child')).toHaveLength(2)
  })
})
