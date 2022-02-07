import React from 'react'
import { node, oneOf } from 'prop-types'

import styles from './HighlightColor.module.scss'

export const colors = ['primary']

const HighlightColor = ({ children, color }) => (
  <span className={color && styles[color]}>{children}</span>
)

HighlightColor.propTypes = {
  children: node.isRequired,
  color: oneOf(colors).isRequired
}

export default HighlightColor
