import React from 'react'
import classNames from 'classnames'
import { bool, node, string } from 'prop-types'

import styles from './Prose.module.scss'

const Prose = ({ children, className, dangerousHtml, inverse }) => {
  if (!children && !dangerousHtml) return null

  return (
    <div
      className={classNames(styles.Prose, inverse && styles.inverse, className)}
      {...(dangerousHtml && {
        dangerouslySetInnerHTML: { __html: dangerousHtml }
      })}
    >
      {children}
    </div>
  )
}

Prose.propTypes = {
  children: node,
  className: string,
  dangerousHtml: string,
  inverse: bool
}

export default Prose
