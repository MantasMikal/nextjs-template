import React from 'react'
import { string } from 'prop-types'

import styles from './Vehicle.module.scss'

const Vehicle = ({
  color,
  name,
  productionDate,
  vehicleEngine,
  vehicleTransmission
}) => (
  <div
    className={styles.Vehicle}
    itemScope
    itemType="http://schema.org/Vehicle"
  >
    <div className={styles.VehicleName} itemProp="name">
      {name}
    </div>
    <ul className={styles.VehicleList}>
      <li itemProp="color">{color}</li>
      <li itemProp="vehicleTransmission">{vehicleTransmission}</li>
      <li
        itemProp="vehicleEngine"
        itemScope
        itemType="http://schema.org/EngineSpecification"
      >
        <span itemProp="name">{vehicleEngine}</span>
      </li>
      <li itemProp="productionDate">{productionDate}</li>
    </ul>
  </div>
)

Vehicle.propTypes = {
  color: string,
  name: string.isRequired,
  productionDate: string,
  vehicleEngine: string,
  vehicleTransmission: string
}

export default Vehicle
