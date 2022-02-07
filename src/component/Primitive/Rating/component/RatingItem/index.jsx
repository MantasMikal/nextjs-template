import React from 'react'
import { bool, number } from 'prop-types'

import styles from './RatingItem.module.scss'

const points =
  '50,0 65.5,31.3 100,36.3 75,60.6 80.9,95 50,78.8 19.1,95 25,60.6 0,36.3 34.5,31.3'

const RatingItem = ({ clip, full }) => {
  const clipPercentage = clip * 100
  return (
    <div className={styles.RatingItem}>
      <svg viewBox="0 0 100 95" width="48">
        {(!full || clip) && (
          <polygon points={points} className={styles.isEmpty} />
        )}
        {(full || clip) && (
          <polygon
            points={points}
            className={styles.isFull}
            style={{
              clipPath: `polygon(0 0, ${clipPercentage}% 0, ${clipPercentage}% 100%, 0 100%)`
            }}
          />
        )}
      </svg>
    </div>
  )
}

RatingItem.propTypes = {
  clip: number,
  full: bool
}

export default RatingItem
