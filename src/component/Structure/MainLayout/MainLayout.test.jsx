import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import MainLayout from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: MainLayout', function () {
  validateRequiredProps(MainLayout, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<MainLayout {...requiredProps()} />)
    expect(wrapper.find('SiteContainer')).toHaveLength(1)
    expect(wrapper.find('Main')).toHaveLength(1)
    expect(wrapper.find('Footer')).toHaveLength(1)
  })
})
