import React, { cloneElement } from 'react'
import { func, node, string } from 'prop-types'

import styles from './ClickableControlWrapper.module.scss'

import VisuallyHidden from '../VisuallyHidden'

const ClickableControlWrapper = ({ control, label, onClick }) => (
  <button
    className={styles.ClickableControlWrapper}
    type="button"
    onClick={onClick}
  >
    <VisuallyHidden>{label}</VisuallyHidden>
    {cloneElement(control, { tabIndex: '-1', readOnly: true })}
  </button>
)

ClickableControlWrapper.propTypes = {
  control: node.isRequired,
  label: string.isRequired,
  onClick: func.isRequired
}

export default ClickableControlWrapper
