import React, { useState } from 'react'
import { bool, node, string } from 'prop-types'
import classNames from 'classnames'

import styles from './Panel.module.scss'

import Element from '../Element'
import Icon from '../Icon'

const Panel = ({
  children,
  expandable,
  highlighted,
  startCollapsed,
  title
}) => {
  const [expanded, toggleExpanded] = useState(!startCollapsed)

  const handleToggleExpanded = () => {
    toggleExpanded(!expanded)
  }

  return (
    <div
      className={classNames(
        styles.Panel,
        expanded && styles.expanded,
        highlighted && styles.highlighted
      )}
    >
      {title && (
        <Element
          className={styles.PanelHeader}
          as={expandable ? 'button' : 'div'}
          {...(expandable && {
            type: 'button',
            onClick: handleToggleExpanded,
            'aria-expanded': expanded
          })}
        >
          <div className={styles.PanelHeaderText}>{title}</div>
          {expandable && (
            <Icon type={expanded ? 'expand-less' : 'expand-more'} a11yText="" />
          )}
        </Element>
      )}
      <div className={styles.PanelContent} hidden={!expanded}>
        {children}
      </div>
    </div>
  )
}

Panel.propTypes = {
  children: node.isRequired,
  expandable: bool,
  highlighted: bool,
  startCollapsed: bool,
  title: string
}

export default Panel
