import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import CaptionedMedia from '.'

const requiredProps = () => ({ children: <img src="" alt="" /> })

describe('Component: CaptionedMedia', function () {
  validateRequiredProps(CaptionedMedia, requiredProps())

  test('should output the expected markup with default props', function () {
    const { getByRole } = render(<CaptionedMedia {...requiredProps()} />)
    expect(getByRole('img')).toBeTruthy()
  })

  test('should output additional content when `caption` prop passed', function () {
    const { getByText } = render(
      <CaptionedMedia {...requiredProps()} caption="Example caption" />
    )
    expect(getByText('Example caption')).toBeTruthy()
  })

  test('should use expected elements when `figure` prop passed', function () {
    const { container } = render(
      <CaptionedMedia {...requiredProps()} figure caption="Example caption" />
    )
    expect(container.querySelector('figure img')).toBeTruthy()
    expect(container.querySelector('figcaption')).toHaveTextContent(
      'Example caption'
    )
  })
})
