import React, { useRef, useState } from 'react'
import { node } from 'prop-types'
import classNames from 'classnames'

import useDimensions from '@/hook/useDimensions'
import useIntersectionObserver from '@/hook/useIntersectionObserver'

import styles from './FixedFooter.module.scss'

const FixedFooter = ({ children }) => {
  const outerRef = useRef()
  const innerRef = useRef()

  const [fixed, toggleFixed] = useState(false)

  const handleFixed = (isIntersecting) => {
    toggleFixed(!isIntersecting)
  }

  const { height } = useDimensions({ ref: innerRef, enableResize: true })

  useIntersectionObserver({
    target: outerRef,
    threshold: 0.98,
    onIntersect: ([{ isIntersecting }]) => handleFixed(isIntersecting)
  })

  return (
    <div
      ref={outerRef}
      className={classNames(styles.FixedFooter, fixed && styles.fixed)}
      style={{ height }}
    >
      <div ref={innerRef} className={styles.FixedFooterInner}>
        {children}
      </div>
    </div>
  )
}

FixedFooter.propTypes = {
  children: node.isRequired
}

export default FixedFooter
