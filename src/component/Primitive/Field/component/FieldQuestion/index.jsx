import React from 'react'
import { bool, node } from 'prop-types'
import classNames from 'classnames'

import styles from './FieldQuestion.module.scss'

const FieldQuestion = ({ children, disabled, htmlFor, noLabel }) => {
  const FieldQuestionInnerEl = noLabel ? 'span' : 'label'

  return (
    <div
      className={classNames(styles.FieldQuestion, disabled && styles.disabled)}
    >
      <FieldQuestionInnerEl {...(!noLabel && { htmlFor })}>
        {children}
      </FieldQuestionInnerEl>
    </div>
  )
}

FieldQuestion.propTypes = {
  children: node.isRequired,
  disabled: bool,
  noLabel: bool,
  htmlFor: function (props, propName, componentName) {
    if (
      (!props.noLabel || props.noLabel === false) &&
      (props[propName] === undefined || typeof props[propName] !== 'string')
    ) {
      return new Error(
        `The prop \`htmlFor\` is marked as required in \`${componentName}\`, unless also using the \`noLabel\` prop`
      )
    }
  }
}

export default FieldQuestion
