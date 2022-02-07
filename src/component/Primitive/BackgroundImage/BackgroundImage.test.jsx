import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import BackgroundImage from '.'

const requiredProps = () => ({ alt: 'Default a11y text' })

const defaultProps = () => ({ src: '/image.jpg' })

describe('Component: BackgroundImage', function () {
  validateRequiredProps(BackgroundImage, requiredProps())

  test('should output the expected markup with default props', function () {
    const { container, getByRole, getByLabelText } = render(
      <BackgroundImage {...requiredProps()} {...defaultProps()} />
    )
    expect(getByRole('img')).toBeTruthy()
    expect(getByLabelText('Default a11y text')).toBeTruthy()
    expect(container.firstChild).toHaveStyle(
      'background-image: url(/image.jpg);'
    )
  })

  test('should output additional className when `fillContainer` prop passed', function () {
    const { container } = render(
      <BackgroundImage {...requiredProps()} {...defaultProps()} fillContainer />
    )
    expect(container.firstChild).toHaveClass('fillContainer')
  })

  test('should output additional styles when `color` prop passed', function () {
    const { container } = render(
      <BackgroundImage
        {...requiredProps()}
        {...defaultProps()}
        color="c0ffee"
      />
    )
    expect(container.firstChild).toHaveStyle({
      backgroundColor: 'c0ffee',
      backgroundImage: 'url(/image.jpg)'
    })
  })

  test('should output additional styles when `position` prop passed', function () {
    const { container } = render(
      <BackgroundImage
        {...requiredProps()}
        {...defaultProps()}
        position="0 0"
      />
    )
    expect(container.firstChild).toHaveStyle({
      backgroundImage: 'url(/image.jpg)',
      backgroundPosition: '0 0'
    })
  })

  test('should output additional styles when `ratio` prop passed', function () {
    const { container } = render(
      <BackgroundImage
        {...requiredProps()}
        {...defaultProps()}
        ratio={9 / 16}
      />
    )
    expect(container.firstChild).toHaveStyle({
      backgroundImage: 'url(/image.jpg)',
      paddingBottom: '56.25%'
    })
  })

  test('should output additional styles when `size` prop passed', function () {
    const { container } = render(
      <BackgroundImage {...requiredProps()} {...defaultProps()} size="cover" />
    )
    expect(container.firstChild).toHaveStyle({
      backgroundImage: 'url(/image.jpg)',
      backgroundSize: 'cover'
    })
  })

  test('should not output a11y attributes if alt=""', function () {
    const { queryByRole, queryByLabelText } = render(
      <BackgroundImage {...requiredProps()} {...defaultProps()} alt="" />
    )
    expect(queryByRole('img')).toEqual(null)
    expect(queryByLabelText('Default a11y text')).toEqual(null)
  })
})
