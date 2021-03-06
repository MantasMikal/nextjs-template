import validateRequiredProps from '@/lib/validate-required-props'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'

import Icon from './'

const requiredProps = () => ({
  a11yText: 'Example text',
  type: '_placeholder'
})

describe('Component: Icon', function () {
  validateRequiredProps(Icon, requiredProps())

  test('should render as expected with required props', function () {
    const { container, getByLabelText, getByRole } = render(
      <Icon {...requiredProps()} />
    )
    expect(container.querySelector('svg')).toBeTruthy()
    expect(container.firstChild).toHaveStyle({
      width: '24px',
      height: '24px'
    })
    expect(getByRole('img')).toBeTruthy()
    expect(getByRole('img')).not.toHaveAttribute('aria-hidden')
    expect(getByLabelText('Example text')).toBeTruthy()
  })

  test('should error if passed an unrecognised type', function () {
    const actual = validatePropTypes(Icon.propTypes, {
      a11yText: 'Example text',
      type: 'not-found'
    })
    const partialExpected =
      'Invalid prop `type` of value `not-found` supplied to `Component`'
    expect(actual.type).toEqual(expect.stringContaining(partialExpected))
  })

  test('should allow custom width to be passed', function () {
    const { container } = render(<Icon {...requiredProps()} width={100} />)
    expect(container.firstChild).toHaveStyle({
      width: '100px',
      height: '100px'
    })
  })

  test('should allow custom height to be passed', function () {
    const { container } = render(<Icon {...requiredProps()} height={100} />)
    expect(container.firstChild).toHaveStyle({
      width: '100px',
      height: '100px'
    })
  })

  test('should allow custom width and height to be passed', function () {
    const { container } = render(
      <Icon {...requiredProps()} width={100} height={50} />
    )
    expect(container.firstChild).toHaveStyle({
      width: '100px',
      height: '50px'
    })
  })

  test('should allow a11yText to be disabled by passing blank string', function () {
    const { container, queryByRole, queryByLabelText } = render(
      <Icon {...requiredProps()} a11yText="" />
    )
    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true')
    expect(queryByRole('img')).toBeNull()
    expect(queryByLabelText('')).toBeNull()
  })

  test('should allow custom vertical-alignment to be passed', function () {
    const { container } = render(<Icon {...requiredProps()} vAlign="top" />)
    expect(container.firstChild).toHaveClass('top')
  })
})
