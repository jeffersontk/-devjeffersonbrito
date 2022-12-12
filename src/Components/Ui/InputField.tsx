import React, { FormEvent, InputHTMLAttributes } from 'react'

interface InputFieldProps {
  id: string;
  label: string;
  isTextarea?: boolean;
  hasError: boolean;
  onChange: (event: string) => void;
  onBlur: (value: boolean) => void;
}

export default function InputField({
  id, 
  onChange, 
  onBlur, 
  hasError, 
  label, 
  isTextarea = false
}: InputFieldProps) {
  const commonProps = {
    id,
    name: id,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> onChange(e.target.value),
    onBlur: () => onBlur(true)
  }

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {isTextarea 
        ? <textarea 
            {...commonProps} 
            rows={10} 
          />
        : <input 
            {...commonProps}
            type="text"
            autoComplete="off"
          />
      }
      {hasError && <span className='error'>Oops, campo invalido preencha corretamente</span>}
    </div>
  )
}
