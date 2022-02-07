import validateRequiredProps from '@/lib/validate-required-props'
import { mount, shallow } from 'enzyme'
import Header from '.'

const requiredProps = () => ({
  navigation: (
    <ul>
      <li>Item 1</li>
      <li>Item 1</li>
    </ul>
  )
})

describe('Component: Header', function () {
  validateRequiredProps(Header, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<Header {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Header')
    expect(wrapper.find('ul')).toHaveLength(1)
  })

  test('should toggle `isActive` className when toggle button clicked', function () {
    const wrapper = mount(<Header {...requiredProps()} foo />)
    const NavToggle = wrapper.find('IconButton')
    expect(wrapper.find('.HeaderNavigation.isActive')).toHaveLength(0)
    NavToggle.simulate('click')
    expect(wrapper.find('.HeaderNavigation.isActive')).toHaveLength(1)
    NavToggle.simulate('click')
    expect(wrapper.find('.HeaderNavigation.isActive')).toHaveLength(0)
  })
})
