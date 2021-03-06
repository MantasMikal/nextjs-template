import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import Notification from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Notification', function () {
  validateRequiredProps(Notification, requiredProps())

  test('should output the expected markup with default props', function () {
    const { getByText } = render(<Notification {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output the expected markup when `onDismiss` prop passed', function () {
    const { getByLabelText } = render(
      <Notification {...requiredProps()} onDismiss={() => {}} />
    )
    expect(getByLabelText('Dismiss')).toBeTruthy()
  })

  test('should output additional className when `status` prop passed', function () {
    const { container } = render(
      <Notification {...requiredProps()} status="success" />
    )
    expect(container.firstChild).toHaveClass('success')
  })

  test('should output the expected markup when `icon` prop passed', function () {
    const { container } = render(
      <Notification {...requiredProps()} icon="_placeholder" />
    )
    expect(container.querySelector('svg')).toBeTruthy()
  })

  test('should add the expected class when `shadow` prop passed', function () {
    const { container } = render(<Notification {...requiredProps()} shadow />)
    expect(container.firstChild).toHaveClass('shadow')
  })
})
