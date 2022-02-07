import React from 'react'
import { oneOf, string } from 'prop-types'

import styles from './Address.module.scss'

const Address = ({
  type,
  addressCountry,
  addressLocality,
  addressRegion,
  name,
  postalCode,
  postOfficeBoxNumber,
  streetAddress
}) => (
  <address
    className={styles.Address}
    itemScope
    itemType={`http://schema.org/${type}`}
  >
    {name && (
      <div className={styles.AddressName} itemProp="name">
        {name}
      </div>
    )}
    <div
      className={styles.AddressContent}
      itemProp="address"
      itemScope
      itemType="http://schema.org/PostalAddress"
    >
      {streetAddress && <div itemProp="streetAddress">{streetAddress}</div>}
      {postOfficeBoxNumber && (
        <div itemProp="postOfficeBoxNumber">{postOfficeBoxNumber}</div>
      )}
      {addressLocality && (
        <div itemProp="addressLocality">{addressLocality}</div>
      )}
      {addressRegion && <div itemProp="addressRegion">{addressRegion}</div>}
      {postalCode && <div itemProp="postalCode">{postalCode}</div>}
      {addressCountry && <div itemProp="addressCountry">{addressCountry}</div>}
    </div>
  </address>
)

Address.propTypes = {
  type: oneOf(['Person', 'Organisation']).isRequired,
  addressCountry: string,
  addressLocality: string,
  addressRegion: string,
  name: string,
  postalCode: string,
  postOfficeBoxNumber: string,
  streetAddress: string.isRequired
}

export default Address
