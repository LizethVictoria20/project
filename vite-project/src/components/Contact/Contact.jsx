import './Contact.css'
import { useState } from 'react'
import Email from './Email'
import Whatsapp from './Whatsapp'

function Contact() {

  const [content, setContent] = useState(false)

  const switchContact = () => {
    setContent(!content)
  }

  return (
    <>
    <div className='sm:pt-20 sm:pb-20 m-auto'>
      <h1>!!!Contactanos!!!</h1>
      <p className='mt-6 leading-8 text-gray-600 w-[32rem] m-auto text-2xl'>Si deseas saber más sobre nosotros no dudes en contactarnos para brindarte más información sobre nuestros servicios.</p>
      <button>Email</button>
      <button>Whatsapp</button>
      <Email />
      <Whatsapp />
    </div>
    </>
  )
}

export default Contact
