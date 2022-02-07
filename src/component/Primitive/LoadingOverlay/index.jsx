import React from 'react'
import { bool, node } from 'prop-types'
import classNames from 'classnames'

import styles from './LoadingOverlay.module.scss'

import Spinner from '../Spinner'

const LoadingOverlay = ({ children, loading }) => (
  <div className={classNames(styles.LoadingOverlay, loading && styles.loading)}>
    <div className={styles.LoadingOverlayContent}>{children}</div>
    {loading && (
      <div className={styles.LoadingOverlayIndicator}>
        <Spinner />
      </div>
    )}
  </div>
)

LoadingOverlay.propTypes = {
  children: node.isRequired,
  loading: bool
}

export default LoadingOverlay
