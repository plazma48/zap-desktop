import React from 'react'
import PropTypes from 'prop-types'
import FaAngleLeft from 'react-icons/lib/fa/angle-left'
import Isvg from 'react-inlinesvg'
import checkIcon from 'icons/check.svg'
import styles from './Theme.scss'

const Fiat = ({ theme, disableSubMenu, setTheme }) => (
  <div>
    <header className={styles.submenuHeader} onClick={disableSubMenu}>
      <FaAngleLeft />
      <span>Theme</span>
    </header>
    <ul className={styles.fiatTickers}>
      <li className={theme === 'dark' ? styles.active : ''} onClick={() => setTheme('dark')}>
        <span>Dark</span>
        {theme === 'dark' && <Isvg src={checkIcon} />}
      </li>
      <li className={theme === 'light' ? styles.active : ''} onClick={() => setTheme('light')}>
        <span>Light</span>
        {theme === 'light' && <Isvg src={checkIcon} />}
      </li>
    </ul>
  </div>
)

Fiat.propTypes = {
  theme: PropTypes.string.isRequired,
  disableSubMenu: PropTypes.func.isRequired,
  setTheme: PropTypes.func
}

export default Fiat
