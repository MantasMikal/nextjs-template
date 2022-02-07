import React from 'react'
import { string } from 'prop-types'

import styles from './FontSample.module.scss'

const sampleCharacters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890&.,?!@()#£$%*+-–=:;\'‘’"“”'
const sampleCharactersAdditional =
  '{}[]\\/<>^_`|~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ– —‘’‚“”„•‹›€'
const sampleLigatures = 'ff fi fj fl ffi ffj ffl st ct Th'
const sampleCopy =
  'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit amet leo consequat posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin vel ante a orci tempus.'
const waterfallSizes = [14, 16, 18, 20, 24, 30, 36, 48, 60, 72]

const FontSample = ({ name, stack }) => (
  <div className={styles.FontSample}>
    <div>Font Sample: {name || stack}</div>
    <div>
      <div className={styles.FontSampleHuge} style={{ fontFamily: stack }}>
        AaBb
      </div>
      <div className={styles.FontSampleRange} style={{ fontFamily: stack }}>
        {sampleCharacters}
      </div>
      <div className={styles.FontSampleRange} style={{ fontFamily: stack }}>
        {sampleLigatures}
      </div>
    </div>
    <div className={styles.FontSampleWaterfall}>
      {waterfallSizes.map((size) => (
        <div key={`FontSampleWaterfall${size}`}>
          <span className={styles.FontSampleLabel}>{size}</span>
          <span style={{ fontFamily: stack, fontSize: size }}>
            {sampleCharacters}
            {sampleCharactersAdditional}
          </span>
        </div>
      ))}
    </div>
    <div className={styles.FontSampleSizeGrid}>
      {[14, 16, 18, 20, 24, 30].map((size) => (
        <div
          key={`FontSampleSize${size}`}
          className={styles.FontSampleSizeGridItem}
        >
          <span className={styles.FontSampleLabel}>{size}</span>
          <span style={{ fontFamily: stack, fontSize: size }}>
            {sampleCopy}
          </span>
        </div>
      ))}
    </div>
  </div>
)

FontSample.propTypes = {
  name: string,
  stack: string.isRequired
}

export default FontSample
