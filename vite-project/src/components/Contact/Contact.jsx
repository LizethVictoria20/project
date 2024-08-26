import './Contact.css'

function Contact() {

  return (
    <>
    <div className='sm:pt-20 sm:pb-20 m-auto'>
      <h1>Contactanos al instante</h1>
      <p className='mt-6 leading-8 text-gray-600 w-[32rem] m-auto text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam architecto laboriosam assumenda, explicabo dolor sequi?</p>
      <form className='flex justify-center mt-10 gap-x-6'>
        <input type='email' className='bg-sky-50 h-10 rounded p-5' placeholder='name@example.com' />
        <button className=''>Enviar</button>
      </form>
    </div>
    </>
  )
}

export default Contact
