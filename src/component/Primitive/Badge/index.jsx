import React, { useContext } from 'react'
import { node, oneOf } from 'prop-types'
import classNames from 'classnames'

import { StatusContext } from '@/component/Context/StatusContext'

import styles from './Badge.module.scss'

const Badge = ({ children, status }) => {
  const contextStatus = useContext(StatusContext)
  const derivedStatus = status || contextStatus

  return (
    <div
      className={classNames(
        styles.Badge,
        derivedStatus && styles[derivedStatus]
      )}
    >
      {children}
    </div>
  )
}

Badge.propTypes = {
  children: node.isRequired,
  status: oneOf(['none', 'error', 'notice', 'success', 'warning'])
}

export default Badge
