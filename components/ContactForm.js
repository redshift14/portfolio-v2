import { useState } from 'react'
import Image from 'next/image'
import { checkName, checkValidEmail, checkMessage } from '../lib/helpers'
import { errors } from '../lib/data/formErrors'
import classes from '../styles/ContactForm.module.css'
import loadingGif from '../public/icons/Spinner-1s-204px.gif'

const ContactForm = ({ locale }) => {

  const { form, form_element, wide, message, success, error } = classes

  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({ name: '', email: '', message: '' })

  const initializeValues = () => {
    setLoading(false)
    setValues({ name: '', email: '', message: '' })
  }

  const handeSubmit = async (e) => {
    e.preventDefault()

    if (!checkName(values.name, locale)) setErrorMessage(locale == 'ar-DZ' ? errors.name.ar : errors.name.en)
    else if (!checkValidEmail(values.email)) setErrorMessage(locale == 'ar-DZ' ? errors.email.ar : errors.email.en)
    else if (!checkMessage(values.message)) setErrorMessage(locale == 'ar-DZ' ? errors.message.ar : errors.message.en)
    
    else {
      setErrorMessage('')
      setLoading(true)
      const successText = locale === 'ar-DZ' ? 'تم إرسال رسالتك بنجاح' : 'Your message has been sent successfully!'
      const failureText = locale === 'ar-DZ' ? 'حدث خطأ ما' : 'Something went wrong'
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
          }
        })
        initializeValues()
        if (res.ok) setSuccessMessage(successText)
        else setErrorMessage(failureText)
        setTimeout(() => {
          setErrorMessage('')
          setSuccessMessage('')
        }, 4000)
      }
      catch(err) {
        initializeValues()
        console.log(err.message)
      } 
    }
  }

  return (
    <form className={form} onSubmit={handeSubmit}>
      <div className={form_element}>
        <label htmlFor='name'>{locale === 'ar-DZ' ? 'الاسم' : 'Your name'}</label>
        <input 
          type='text' 
          id='name' 
          value={values.name}
          onChange={(e) => setValues({...values, name: e.target.value})} 
        />
      </div>
      <div className={form_element}>
        <label htmlFor='email'>{locale === 'ar-DZ' ? 'البريد الالكتروني' : 'Your email'}</label>
        <input 
          type='text' 
          id='email' 
          value={values.email}
          onChange={(e) => setValues({...values, email: e.target.value})} 
        />
      </div>
      <div className={`${form_element} ${wide}`}>
        <label htmlFor='message'>{locale === 'ar-DZ' ? 'الرسالة' : 'Your message'}</label>
        <textarea 
          id='message'  
          value={values.message}
          onChange={(e) => setValues({...values, message: e.target.value})} 
        />
      </div>
      <button type='submit' className={wide}>
        {
          loading ? <Image src={loadingGif} alt='loading spinner' /> : 
          locale === 'ar-DZ' ? 'إرسال' : 'Send message'
        }
      </button>
      {
        errorMessage !== '' &&
        <p className={`${message} ${error} ${wide}`}>{errorMessage}</p>
      }
      {
        successMessage !== '' && 
        <p className={`${message} ${success} ${wide}`}>{successMessage}</p>
      }
    </form>
  )
}

export default ContactForm