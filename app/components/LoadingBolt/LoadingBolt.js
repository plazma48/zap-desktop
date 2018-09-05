import React from 'react'
import PropTypes from 'prop-types'
import Isvg from 'react-inlinesvg'

import cloudLightning from 'icons/cloud_lightning.svg'

import styles from './LoadingBolt.scss'

const LoadingBolt = ({ theme }) => (
  <div className={`${styles.container} ${theme}`}>
    <div className={styles.content}>
      <Isvg className={styles.bolt} src={cloudLightning} />
      <h1>loading</h1>
    </div>
  </div>
)

LoadingBolt.propTypes = {
  theme: PropTypes.string.isRequired
}

export default LoadingBolt
