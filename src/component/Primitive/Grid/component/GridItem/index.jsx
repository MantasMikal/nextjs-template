import React from 'react'
import classNames from 'classnames'
import { arrayOf, node, number, object, oneOf, oneOfType } from 'prop-types'
// import sassKeysToArray from '@/lib/sass-keys-to-array'

import styles from './GridItem.module.scss'

// const columns = sassKeysToArray(styles.columns)
const columns = ['m', 't', 'd']
const trailingGaps = ['mobile', 'default']

const getWidthClasses = (widths) => {
  if (Array.isArray(widths)) {
    return widths.map(
      (width, i) => styles[`${columns[i]}-${Math.round(width * 100)}`]
    )
  }
  return Object.entries(widths).map(
    (width) =>
      columns.includes(width[0]) &&
      styles[`${width[0]}-${Math.round(width[1] * 100)}`]
  )
}

const GridItem = ({ children, width, trailingGap }) => (
  <div
    className={classNames(
      styles.GridItem,
      width && getWidthClasses(width),
      trailingGap && styles[`trailingGap-${trailingGap}`]
    )}
  >
    {children}
  </div>
)

GridItem.displayName = 'GridItem'

GridItem.propTypes = {
  children: node.isRequired,
  trailingGap: oneOf(trailingGaps),
  width: oneOfType([arrayOf(number), object])
}

export default GridItem
