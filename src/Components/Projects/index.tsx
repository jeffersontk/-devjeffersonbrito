import React from 'react'
import { ProjectCard } from './ProjectCard'
import styles from './Projects.module.scss'

interface ProjectsProps {
  projects: any
}

export function Projects({projects}: ProjectsProps) {

  const renderProjects = projects.projects.map((project: any)=>(
    <ProjectCard key={project._key} project={project}/>
  ))

  return (
    <section className={styles.projects} id="projects">
      <h2>{projects.title}</h2>
      <ul className={styles.list}>
       {renderProjects}
      </ul>
      <a href={projects.url} className='btn btn-primary'>
         {projects.button}
      </a>
    </section>
  )
}
