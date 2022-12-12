import React from 'react';
import styles from './Experience.module.scss'

interface ExperienceProps {
  exp: {
    company: string,
    experience: string,
    period: string,
  }
}

const Experience = ({exp}: ExperienceProps) => {
  const {company, experience, period} = exp
  return (
    <ul>
      <li className={styles.experience}>
        <div className={styles.period}>
          {period}
        </div>
        <div className={styles.description}>
          <h4>{experience}</h4>
          <h5>{company}</h5>
        </div>
      </li>
    </ul>
  );
}

export default Experience;