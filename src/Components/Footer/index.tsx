import { FormEvent, useState } from 'react'
import { useValidationField } from '../../hooks/useValidationField'
import client from '../../lib/sanity'
import Box from '../Ui/Box'
import InputField from '../Ui/InputField'
import Spinner from '../Ui/Spinner'
import styles from './Footer.module.scss'

interface FooterProps {
  footer: {
    title: string,
    copy: string
  }
}

export default function Footer({footer}: FooterProps) {
  const {title, copy} = footer
  const [isLoading, setIsLoading] = useState(false)
  const [isDataSent, setIsDataSent] = useState(false)
  const [hasError, setHasError] = useState(false)
  const {
    value: name,
    isTouched: isNameTouched,
    setValue: setName,
    setIsTouched: setIsNameTouched,
    inputHasError: nameHasError,
  } = useValidationField((value: string) => value !== '')
  
  const {
    value: email,
    isTouched: isEmailTouched,
    setValue: setEmail,
    setIsTouched: setIsEmailTouched,
    inputHasError: emailHasError,
  } = useValidationField((value: string) => value.includes('@') && value.includes('.'))
  
  const {
    value: message,
    isTouched: isMessageTouched,
    setValue: setMessage,
    setIsTouched: setIsMessageTouched,
    inputHasError: messageHasError,
  } = useValidationField((value: string) => value.length >= 30)
  
  const isFormTouched = isNameTouched && isEmailTouched && isMessageTouched
  const isFormValid = isFormTouched 
    && !nameHasError 
    && !emailHasError 
    && !messageHasError
    && name != ''
    && email != ''
    && message != ''
    && !isLoading

  const submitForm = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const contactData = {
      _type: 'contact',
      name,
      email,
      message
    }
    try {
      await client.create(contactData)
      setIsLoading(false)
      setIsDataSent(true)
    } catch (error) {
      setIsLoading(false)
      setHasError(true)
    }
  }
  return (
    <footer className={styles['footer-wrapper']} id="contact">
      <div className={styles.footer}>
        <div className={styles.box}>
          <Box text='Contato'/>
        </div>
        <h2>{title}</h2>
        {!isDataSent ? 
          <form autoComplete="off" onSubmit={submitForm}>
            <InputField 
              id='name'
              label='Qual o seu nome?'
              hasError={nameHasError}
              onChange={setName}
              onBlur={setIsNameTouched}
            />
            <InputField 
              id='email'
              label='E o seu e-mail?'
              hasError={emailHasError}
              onChange={setEmail}
              onBlur={setIsEmailTouched}
            />
            <InputField 
              id='message'
              label='Deixe sua mensagem para mim!'
              hasError={messageHasError}
              onChange={setMessage}
              onBlur={setIsMessageTouched}
              isTextarea={true}
            />
            <button type='submit' disabled={!isFormValid} className='btn btn-primary'>
              {isLoading ? <Spinner /> :'Enviar'}
            </button>
            {hasError && 
              <span className='error'>Oops! Alguma coisa de errado...</span>
            }
          </form>
          : 
          <h3 className="success">Obrigado por entrar em contato!</h3>
      }
        <span className={styles.copy}>{copy}</span>
      </div>
    </footer>
  )
}
