import React from 'react'
import { string } from 'prop-types'

import styles from './DateCard.module.scss'

const DateCard = ({ primary, secondary, timestamp }) => (
  <time className={styles.DateCard} {...(timestamp && { dateTime: timestamp })}>
    <div className={styles.DateCardPrimary}>{primary}</div>
    <div className={styles.DateCardSecondary}>{secondary}</div>
  </time>
)

DateCard.propTypes = {
  primary: string.isRequired,
  secondary: string.isRequired,
  timestamp: string.isRequired
}

export default DateCard
