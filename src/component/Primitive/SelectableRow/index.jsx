import React from 'react'
import { func, node, oneOf, string, bool } from 'prop-types'

import styles from './SelectableRow.module.scss'

import Icon from '../Icon'

const SelectableRow = ({ children, name, type, value, onChange, checked }) => (
  <label className={styles.SelectableRow} tabIndex="-1">
    {/* tabIndex to avoid flashing of parent panel :focus-within styles */}
    <input
      type={type}
      name={name}
      className={styles.SelectableRowControl}
      value={value}
      checked={checked}
      {...(onChange && { onChange })}
    />

    <div className={styles.SelectableRowInner}>
      <div className={styles.SelectableRowContent}>{children}</div>
      <div className={styles.SelectableRowIndicator}>
        <Icon type="check" a11yText="" width={16} />
      </div>
    </div>
  </label>
)

SelectableRow.defaultProps = {
  type: 'checkbox'
}

SelectableRow.propTypes = {
  children: node.isRequired,
  name: string.isRequired,
  onChange: func,
  type: oneOf(['checkbox', 'radio']),
  checked: bool,
  value: string.isRequired
}

export default SelectableRow
