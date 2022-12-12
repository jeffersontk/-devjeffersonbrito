import React from 'react';
import styles from './Navlink.module.scss'

interface NavlinkProps {
  title: string
  link: string
  toggleMenu?: React.MouseEventHandler<HTMLLIElement> | undefined
}

const Navlink: React.FC<NavlinkProps> = ({link, title, toggleMenu}) => {
  return (  
    <li className={styles.item} onClick={toggleMenu}>
      <a href={link} className='h6'>{title}</a>
    </li>
  )
}

export default Navlink;