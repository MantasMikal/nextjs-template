import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import FieldQuestion from '.'

const requiredProps = () => ({
  children: 'Default content',
  htmlFor: 'example-name'
})

describe('Component: FieldQuestion', function () {
  test('should return errors if invalid default props passed', function () {
    const actual = validatePropTypes(FieldQuestion.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.',
      htmlFor:
        'The prop `htmlFor` is marked as required in `Component`, unless also using the `noLabel` prop'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function () {
    const actual = validatePropTypes(FieldQuestion.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function () {
    const { container, getByText } = render(
      <FieldQuestion {...requiredProps()} />
    )
    expect(getByText('Default content')).toBeTruthy()
    expect(container.firstChild.querySelector('label')).toHaveAttribute(
      'for',
      'example-name'
    )
  })

  test('should output expected markup when `noLabel` prop passed', function () {
    const { container } = render(<FieldQuestion {...requiredProps()} noLabel />)
    expect(container.firstChild.querySelector('span')).toBeTruthy()
  })

  test('should output expected styles when `disabled` prop passed', function () {
    const { container } = render(
      <FieldQuestion {...requiredProps()} disabled />
    )
    expect(container.firstChild).toHaveClass('disabled')
  })
})
