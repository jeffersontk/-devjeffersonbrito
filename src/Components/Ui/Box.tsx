import React from 'react'
import styles from './Box.module.scss'

interface BoxProps {
  text: string
}

export default function Box({text}: BoxProps) {
  return (
    <div className={styles.box}>
      <span className='h5'>{text}</span>
    </div>
  )
}
