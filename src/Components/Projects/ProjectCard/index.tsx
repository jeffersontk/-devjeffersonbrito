import Image from 'next/image'
import React from 'react'
import { useSanityImage } from '../../../hooks/useSanityImage'
import styles from './ProjectCard.module.scss'
import {AiFillGithub} from 'react-icons/ai'

interface ProjectCardProps {
  project: any
}

export function ProjectCard({project}: ProjectCardProps) {
  const {urlFor} = useSanityImage()
  const URLImage = urlFor(project.image).url()
  
  return (
    <li className={styles.card}>
      <a href={project.url} target="_blank" rel="noreferrer">
        <div className={styles.image}>
          <AiFillGithub  className={styles.icon}/>
          <Image src={URLImage} fill alt=""/>
        </div>
        {
          project.technologies.map((tech: any) => (
            <span key={tech._key}>{tech.technology}</span>
          ))
        }
        <h3 className='h5'>{project.title}</h3>
        <p>
         {project.description}
        </p>
      </a>
    </li>
  )
}
