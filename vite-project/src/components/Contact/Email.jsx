function Email() {
  return (
    <>
      <form className='flex justify-center mt-10 gap-x-6'>
        <input type='email' className='bg-sky-50 h-10 rounded p-5' placeholder='name@example.com' />
        <button className=''>Enviar</button>
      </form>
    </>
  )
}

export default Email