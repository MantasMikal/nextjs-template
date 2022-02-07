import React from 'react'
import { bool, node } from 'prop-types'
import classNames from 'classnames'

import styles from './InlineGroup.module.scss'

const InlineGroup = ({ block, children, even }) => (
  <div
    className={classNames(
      styles.InlineGroup,
      block && styles.block,
      even && styles.even
    )}
  >
    {children}
  </div>
)

InlineGroup.propTypes = {
  block: bool,
  children: node.isRequired,
  even: bool
}

export default InlineGroup
