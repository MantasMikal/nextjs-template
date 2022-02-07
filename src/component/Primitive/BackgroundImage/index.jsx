import React from 'react'
import { arrayOf, bool, number, shape, string } from 'prop-types'
import classNames from 'classnames'

import styles from './BackgroundImage.module.scss'

import generateUniqueCssClass from './lib/unique-css-class-generator'
import srcSetToCss from './lib/srcset-to-css-formatter'

const BackgroundImage = ({
  alt,
  color,
  fillContainer,
  position,
  ratio,
  size,
  src,
  srcSet
}) => {
  const formattedRatio = parseFloat((ratio * 100).toFixed(5))

  // To allow multiple srcSet powered <style> elements on the same page, each
  // has to have a unique class name to avoid clashing. This creates a class
  // based on the file path - rudimentary for now, can be improved later.
  const hasSrcSet = !!srcSet.length
  const uniqueClass = hasSrcSet && generateUniqueCssClass(srcSet[0].src)

  return (
    <div
      className={classNames(
        styles.BackgroundImage,
        fillContainer && styles.fillContainer,
        uniqueClass
      )}
      style={{
        ...(!hasSrcSet && { backgroundImage: `url(${src})` }),
        ...(color && { backgroundColor: color }),
        ...(position && { backgroundPosition: position }),
        ...(ratio && { paddingBottom: `${formattedRatio}%` }),
        ...(size && { backgroundSize: size })
      }}
      {...(alt !== '' && {
        role: 'img',
        'aria-label': alt
      })}
    >
      {hasSrcSet && (
        <style
          dangerouslySetInnerHTML={{
            __html: srcSetToCss({ uniqueClass, srcSet })
          }}
        />
      )}
    </div>
  )
}

BackgroundImage.defaultProps = {
  srcSet: []
}

BackgroundImage.propTypes = {
  alt: string.isRequired,
  color: string,
  fillContainer: bool,
  position: string,
  ratio: number,
  size: string,
  src: string,
  srcSet: arrayOf(shape({ width: number, src: string }))
}

export default BackgroundImage
