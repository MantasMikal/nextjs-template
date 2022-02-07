import React from 'react'
import classNames from 'classnames'
import { bool, node, oneOf, oneOfType, string } from 'prop-types'
// import sassKeysToArray from '@/lib/sass-keys-to-array'

import styles from './GridWrapper.module.scss'

// const gutters = sassKeysToArray(styles.gutters)
const gutters = ['half', 'default', 'double']

const GridWrapper = ({ children, gutter, reverse }) => (
  <div
    className={classNames(
      // styles.GridWrapper,
      gutter && styles[`gutter-${gutter}`],
      reverse &&
        styles[`reverse${typeof reverse === 'string' ? '-' + reverse : ''}`]
    )}
  >
    {children}
  </div>
)

GridWrapper.propTypes = {
  children: node.isRequired,
  gutter: oneOf(gutters),
  reverse: oneOfType([bool, string])
}

export default GridWrapper
