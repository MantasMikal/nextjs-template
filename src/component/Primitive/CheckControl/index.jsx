import { bool, node, oneOfType, string } from 'prop-types'

import CheckControlText from './CheckControlText'
import CustomCheckControl from './CustomCheckControl'
import NativeCheckControl from './NativeCheckControl'
import ShrinkWrap from '../ShrinkWrap'

const CheckControl = ({ children, native, ...other }) => {
  const CheckControlType = native ? NativeCheckControl : CustomCheckControl

  return (
    <ShrinkWrap as="label">
      <ShrinkWrap.Item shrink vAlign="middle">
        <CheckControlType {...other} />
      </ShrinkWrap.Item>
      <ShrinkWrap.Item vAlign="middle">
        <CheckControlText>{children}</CheckControlText>
      </ShrinkWrap.Item>
    </ShrinkWrap>
  )
}

CheckControl.propTypes = 'CheckControl'

CheckControl.propTypes = {
  children: oneOfType([string, node]).isRequired,
  native: bool
}

export default CheckControl
