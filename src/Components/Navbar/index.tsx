import React, {useState} from 'react'
import styles from './Navbar.module.scss'
import Navlink from './Navlink'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false)

  const commonAttributes = {
    className: styles.icon,
    onClick: ()=> setIsMenu(!isMenu)
  }

  return (
    <section className={styles['navbar-wrapper']}>
      <div className={styles.navbar}>
        <a href="#home" className={styles.logo}>
          <span>@</span> DevJeffersonBrito
        </a>
        <nav>
          <ul className={styles.list}>
            <Navlink link='#about' title='Sobre mim'/>
            <Navlink link='#skills' title='Experiência'/>
            <Navlink link='#projects' title='Projetos'/>
            <Navlink link='#contact' title='Contato'/>
          </ul>
        </nav>
        <div className={`${styles.mobile} ${isMenu ? styles.active : ''}`}>
          <GiHamburgerMenu {...commonAttributes} />
          <div className={styles.background}>
            <AiOutlineClose {...commonAttributes} />
            <nav>
              <ul className={styles['mobile-list']}>
                <Navlink link='#about' title='Sobre mim' toggleMenu={()=> setIsMenu(!isMenu)}/>
                <Navlink link='#skills' title='Experiência' toggleMenu={()=> setIsMenu(!isMenu)}/>
                <Navlink link='#projects' title='Projetos' toggleMenu={()=> setIsMenu(!isMenu)}/>
                <Navlink link='#contact' title='Contato' toggleMenu={()=> setIsMenu(!isMenu)}/>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
