import React from 'react'
import { bool, number, string } from 'prop-types'
import classNames from 'classnames'

import styles from './Spinner.module.scss'

import VisuallyHidden from '../VisuallyHidden'

const Spinner = ({ a11yText, paused, revealDelay, size }) => (
  <div
    className={classNames(styles.Spinner, paused && styles.paused)}
    role="alert"
    aria-live="assertive"
    style={{
      ...(revealDelay && { animationDelay: `${revealDelay}ms` }),
      ...(size && {
        height: size,
        lineHeight: `${size}px`,
        width: size
      })
    }}
  >
    <div className={classNames(styles.SpinnerInner)}>
      <VisuallyHidden>{a11yText}</VisuallyHidden>
      <svg viewBox="0 0 21 21">
        <circle cx="10.5" cy="1.5" r="1.5" />
        <circle cx="4.1" cy="4.1" r="1.5" />
        <circle cx="1.5" cy="10.5" r="1.5" />
        <circle cx="4.1" cy="16.9" r="1.5" />
        <circle cx="10.5" cy="19.5" r="1.5" />
        <circle cx="16.9" cy="16.9" r="1.5" />
        <circle cx="19.5" cy="10.5" r="1.5" />
        <circle cx="16.9" cy="4.1" r="1.5" />
      </svg>
    </div>
  </div>
)

Spinner.defaultProps = {
  a11yText: 'Loading…'
}

Spinner.propTypes = {
  a11yText: string,
  paused: bool,
  revealDelay: number,
  size: number
}

export default Spinner
