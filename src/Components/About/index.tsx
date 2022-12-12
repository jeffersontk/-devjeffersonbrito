import Image from 'next/image'
import { useSanityImage } from '../../hooks/useSanityImage'
import Box from '../Ui/Box'
import styles from './About.module.scss'

interface AboutProps {
  about:{
    image: any,
    title: string,
    text: paragraphs[],
    button: string,
    url: string
  }
}
type paragraphs = {
  _key: string,
  paragraph: string
}

export function About({about}: AboutProps) { 
  const {urlFor} = useSanityImage()
  if(about){
    const {text, button, image, title, url} = about
    const URLImage = urlFor(image).url()
    return (
      <section className={styles.about} id="about">
        <div className={styles.image}>
          <Image alt='' 
            src={URLImage} 
            fill/>
          <div className={styles.box}>
            <Box text="Sobre" />
          </div>
        </div>
        <div className={styles.content}>
          <h2>{title}</h2>
          {text.map((p)=>(
            <p key={p._key}>{p.paragraph}</p>
          ))}
          <a href={url} className='btn btn-primary'>{button}</a>
        </div>
      </section>
    )
  }else {
    return (
      <h4>...loading</h4>
    )
  }
}
