import React from 'react'
import { bool, node } from 'prop-types'
import classNames from 'classnames'

import styles from './OverlayLink.module.scss'

import SmartLink from '../SmartLink'

const OverlayLink = ({ children, debug, ...rest }) => (
  <SmartLink
    className={classNames(styles.OverlayLink, debug && styles.debug)}
    {...rest}
  >
    {children}
  </SmartLink>
)

OverlayLink.propTypes = {
  children: node.isRequired,
  debug: bool
}

export default OverlayLink
