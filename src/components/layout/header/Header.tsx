import React from 'react'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <p>
        <a href="/dishscreen">Dish Screen</a>
      </p>
      <p>
        <a href="/sportscreen">Sport Screen</a>
      </p>
    </div>
  )
}