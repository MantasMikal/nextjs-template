// import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
// import { render } from '@testing-library/react'
import VideoLooper from '.'

const requiredProps = () => ({})

describe('Component: VideoLooper', () => {
  validateRequiredProps(VideoLooper, requiredProps())

  // test('should output the expected markup with default props', () => {
  //   const { getByText } = render(<VideoLooper {...requiredProps()} />)
  //   expect(getByText('Default content')).toBeTruthy()
  // })

  // test('should output additional className when `foo` prop passed', () => {
  //   const { } = render(<VideoLooper {...requiredProps()} foo />)
  //   expect().toEqual()
  // })
})
