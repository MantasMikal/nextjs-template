import React from 'react'
import { bool, string } from 'prop-types'
import classNames from 'classnames'

import styles from './ButtonOutline.module.scss'

import ButtonBase from '../ButtonBase'

const ButtonOutline = ({ className, disabled, ...other }) => (
  <ButtonBase
    className={classNames(
      styles.ButtonOutline,
      disabled && styles.disabled,
      className
    )}
    disabled={disabled}
    {...other}
  />
)

ButtonOutline.propTypes = {
  className: string,
  disabled: bool
}

export default ButtonOutline
