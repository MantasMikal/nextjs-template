import React from 'react'
import { number } from 'prop-types'

import RatingItem from './component/RatingItem'
import Inline from '../Inline'
import VisuallyHidden from '../VisuallyHidden'

import styles from './Rating.module.scss'

function round(num) {
  return Math.round(num * 10) / 10
}

const Rating = ({ rating, total, count }) => {
  const decimalRating = rating / total
  const itemSize = 1 / count
  return (
    <div className={styles.Rating}>
      <VisuallyHidden>
        Rating: {rating}/{total}
      </VisuallyHidden>
      <Inline>
        {[...Array(count).keys()].map((i) => {
          const max = itemSize * (i + 1)
          const clip = 1 - round((max - decimalRating) * count)
          return (
            <RatingItem
              key={`id-${i}`}
              full={clip >= 1}
              {...(clip > 0 && clip < 1 && { clip })}
            />
          )
        })}
      </Inline>
    </div>
  )
}

Rating.defaultProps = {
  count: 5,
  rating: 0,
  total: 100
}

Rating.propTypes = {
  count: number,
  rating: number,
  total: number
}

export default Rating
