import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center'>
      <form action="" className='flex flex-col w-96 gap-5'>
        <input type="text" className='px-5 py-2 rounded-lg' placeholder='Ingresa tu nombre'/>
        <input type="text" className='px-5 py-2 rounded-lg' placeholder='Ingresa tu e-mail'/>
        <input type="text" className='px-5 py-2 rounded-lg' placeholder='Ingresa tu telefono'/>
      </form>
    </div>
  )
}

export default Contact