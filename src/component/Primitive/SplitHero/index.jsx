import React from 'react'
import { arrayOf, number, shape, string } from 'prop-types'

import styles from './SplitHero.module.scss'

import BackgroundImage from '../BackgroundImage'
import ButtonStandard from '../ButtonStandard'
import OverlayLink from '../OverlayLink'
import Stack from '../Stack'
import Type from '../Type'

const SplitHero = ({
  alt,
  title,
  ctaText,
  ctaUrl,
  description,
  src,
  srcSet
}) => (
  <div className={styles.SplitHero}>
    <div className={styles.SplitHeroContent}>
      <Stack>
        <Type as="h2" size="title" className={styles.SplitHeroHeading}>
          <OverlayLink href={ctaUrl}>{title}</OverlayLink>
        </Type>
        {description && (
          <div className={styles.SplitHeroDescription}>{description}</div>
        )}
        {ctaText && (
          <div className={styles.SplitHeroAction}>
            <ButtonStandard href={ctaUrl}>{ctaText}</ButtonStandard>
          </div>
        )}
      </Stack>
    </div>
    <div className={styles.SplitHeroImage}>
      <BackgroundImage
        src={src}
        srcSet={srcSet}
        alt={alt || ''}
        fillContainer
      />
    </div>
  </div>
)

SplitHero.propTypes = {
  alt: string,
  ctaText: string,
  ctaUrl: string,
  description: string,
  src: string,
  srcSet: arrayOf(shape({ width: number, src: string })),
  title: string.isRequired
}

export default SplitHero
