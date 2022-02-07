import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import NavigationWrapper from '.'

const requiredProps = () => ({
  children: [<button key="1">One</button>, <button key="2">Two</button>],
  id: 'example-id'
})

describe('Component: NavigationWrapper', function () {
  validateRequiredProps(NavigationWrapper, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<NavigationWrapper {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('NavigationWrapper')
    expect(wrapper.find('button')).toHaveLength(2)
    expect(wrapper.prop('id')).toEqual('example-id')
  })
})
