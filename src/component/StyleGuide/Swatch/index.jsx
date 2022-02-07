import React from 'react'
import { string } from 'prop-types'
import classNames from 'classnames'
import colorFormatter from '@/lib/color-formatter'

import styles from './Swatch.module.scss'

const Swatch = ({ color, name }) => {
  const { channels, formats } = colorFormatter(color)
  return (
    <div
      className={classNames(
        styles.Swatch,
        channels.alpha < 1 && styles.hasAlpha
      )}
    >
      <div className={styles.SwatchInner} style={{ backgroundColor: color }}>
        <div className={styles.SwatchContent}>
          <div className={styles.SwatchHeading}>{name}</div>
          <ul className={styles.SwatchList}>
            {Object.values(formats).map((format) => (
              <li key={`Swatch-${format}`} className={styles.SwatchListItem}>
                {format}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

Swatch.propTypes = {
  color: string.isRequired,
  name: string
}

export default Swatch
