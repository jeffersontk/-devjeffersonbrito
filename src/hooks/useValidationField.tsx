import {useState} from 'react'

export const useValidationField = (validateForm:any) => {
  const [value, setValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)

  const isFieldValid = validateForm(value)
  const inputHasError = isTouched && !isFieldValid

  return {
    value, isTouched, setValue, setIsTouched, inputHasError 
  }
}