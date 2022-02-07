import React from 'react'
import { node, string } from 'prop-types'

import styles from './Signpost.module.scss'

import Icon from '../Icon'
import SmartLink from '../SmartLink'

const Signpost = ({ children, icon, ...other }) => (
  <SmartLink className={styles.Signpost} {...other}>
    {icon && (
      <div className={styles.SignpostIcon}>
        <Icon type={icon} />
      </div>
    )}
    {children}
  </SmartLink>
)

Signpost.propTypes = {
  children: node.isRequired,
  href: string,
  icon: string,
  to: string
}

export default Signpost
