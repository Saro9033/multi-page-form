import React from 'react'
import Tick from '../../Images/tick.png'

const Complete = () => {

  return (
    <div className='container mt-5'>
      <div className='flex flex-col items-center'>
        <div className='text-green-400'>
          <img src={Tick} width="120px" alt="" />      

        </div>
        <div className="mt-3 text-xl font-semibold uppercase text-green-500">
          Congratulations!
           </div>
           <div className='text-lg text-center font-semibold text-gray-500'>
            Your Accound has been created.
           </div>
           <a href="/" className='mt-10'>
            <button className='h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300
            rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100'>
              Close </button>
           </a>
        </div> 

    </div>
  )
}

export default Complete