import styles from './Header.module.scss'
import {RiLinkedinFill, RiWhatsappFill} from 'react-icons/ri'
import {AiFillInstagram, AiOutlineArrowDown} from 'react-icons/ai'
import { useSanityImage } from '../../hooks/useSanityImage'
import Image from 'next/image'

interface HeaderProps {
  header: {
    image: any,
    name: string,
    occupation: string,
    summary: string
  },
  social: {
    instagram: string,
    linkedin: string,
    whatsapp: string
  }
}

export function Header({header, social}: HeaderProps) {
  const {instagram, linkedin, whatsapp} = social
  const {image, name, occupation, summary} = header
  const {urlFor} = useSanityImage()
  const URLImage = urlFor(image).url()

  return (
    <header className={styles['header-wrapper']} id="home">
      <div className={styles.header}>
        <div className={styles.image}>
          <Image alt='' src={URLImage} layout="fill"/>
        </div>
        <div className={styles.content}>
          <span>Olá meu nome é {name}. Sou um...</span>
          <h1>{occupation}</h1>
          <p>{summary}</p>
        </div>
        <div className={styles.social}>
          <a href={linkedin} target="_blank">
            <RiLinkedinFill className={styles.icon}/>
          </a>
          <a href={instagram} target="_blank">
            <AiFillInstagram className={styles.icon}/>
          </a>
          <a href={whatsapp} target="_blank">
            <RiWhatsappFill className={styles.icon}/>
          </a>
        </div>
        <a href="#about" className={styles.arrow}>
          <AiOutlineArrowDown className={styles.icon}/>
        </a>
      </div>
    </header>
  )
}
