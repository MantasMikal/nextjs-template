import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import Byline from '.'

const requiredProps = () => ({})

describe('Component: Byline', function () {
  validateRequiredProps(Byline, requiredProps())

  test('should output nothing without expected props', function () {
    const { container } = render(<Byline {...requiredProps()} />)
    expect(container.firstChild).toEqual(null)
  })

  test('should output expected content when `author` prop passed', function () {
    const { getByText } = render(
      <Byline {...requiredProps()} author="Firstname Lastname" />
    )
    expect(getByText('Firstname Lastname')).toBeTruthy()
  })

  test('should output expected content when `displayDate` prop passed', function () {
    const { container, getByText } = render(
      <Byline {...requiredProps()} displayDate="1 Jan 2020" />
    )
    expect(container.querySelector('time')).toBeTruthy()
    expect(getByText('1 Jan 2020')).toBeTruthy()
  })

  test('should output expected content when `displayDate` and `timestamp` props passed', function () {
    const { container, getByText } = render(
      <Byline
        {...requiredProps()}
        displayDate="1 Jan 2020"
        timestamp="2020-01-01T00:00:00Z"
      />
    )
    expect(container.querySelector('time')).toHaveAttribute('datetime')
    expect(getByText('1 Jan 2020')).toBeTruthy()
  })
})
