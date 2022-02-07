import React from 'react'
import classNames from 'classnames'
import { node, oneOf, string } from 'prop-types'

import { StatusContextProvider } from '@/component/Context/StatusContext'
import styles from './FieldWrapper.module.scss'

const FieldWrapper = ({ children, id, status }) => (
  <div
    className={classNames(styles.FieldWrapper, status && styles[status])}
    id={id}
  >
    <StatusContextProvider status={status}>{children}</StatusContextProvider>
  </div>
)

FieldWrapper.propTypes = {
  children: node.isRequired,
  id: string,
  status: oneOf(['none', 'error', 'notice', 'success', 'warning'])
}

export default FieldWrapper
