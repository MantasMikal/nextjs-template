import React from 'react'
import { bool, node } from 'prop-types'
import classNames from 'classnames'

import styles from './SeparatedStack.module.scss'

const SeparatedStack = ({ children, leading, trailing }) => (
  <div
    className={classNames(
      styles.SeparatedStack,
      leading && styles.leading,
      trailing && styles.trailing
    )}
  >
    {children}
  </div>
)

SeparatedStack.propTypes = {
  children: node.isRequired,
  leading: bool,
  trailing: bool
}

export default SeparatedStack
