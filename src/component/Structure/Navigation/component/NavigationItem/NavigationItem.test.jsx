import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import NavigationItem from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: NavigationItem', function () {
  validateRequiredProps(NavigationItem, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<NavigationItem {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('NavigationItem')
    expect(wrapper.find('SmartLink').prop('children')).toEqual(
      'Default content'
    )
  })

  test('should output additional className when `active` prop passed', function () {
    const wrapper = shallow(<NavigationItem {...requiredProps()} active />)
    expect(wrapper.find('.NavigationItemLink').prop('className')).toEqual(
      'NavigationItemLink active'
    )
  })
})
