import React from 'react'
import Experience from './Experience/Index'
import styles from './Skills.module.scss'

interface SkillsProps {
  skills: {
    experience_title: string, 
    experiences_list: experience[],
    skills_list: skill[],
    skills_title: string,
    subtitle: string,
    title: string
  }
}

type skill = {
  _key: string,
  skill: string,
}

type experience = {
  _key: string,
  company: string,
  experience: string,
  period: string,
}

export default function Skills({skills}:SkillsProps) {
  const {
    experience_title, 
    experiences_list, 
    skills_list,
    skills_title,
    subtitle,
    title
  } = skills
  return (
    <div className={styles.container} id="skills">
      <section className={styles.section}>
        <div className={styles.skills}>
          <div className={styles.heading}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <div className={styles.content}>
            <h3>{skills_title}</h3>
            <ul>
              {
                skills_list.map(item => (
                  <li className='h5' key={item._key}>{item.skill}</li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className={styles.experiences}>
          <h3>{experience_title}</h3>
          {
            experiences_list.map(exp => (
              <Experience key={exp._key} exp={exp}/>
            ))
          }
        </div>
      </section>
    </div>
  )
}
