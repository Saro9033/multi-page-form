import React, { useContext , useRef, useState} from 'react'
import { StepperContext } from '../../Context/StepperContext'
import StepperControl from '../StepperControl';
import toast from 'react-hot-toast';

const Account = ({handleClick,currStep, steps}) => {
  const [passShow, setPassShow] = useState(false)
  const { userData, setUserData } = useContext(StepperContext)
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value })
  }
  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9].*[0-9])(?=.*[!@#$%^&*])[\S]*$/;
    return passwordRegex.test(password);
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if(!isPasswordValid(userData.password)){
      toast.error("Password is not valid. It must contain 2 numbers, 1 capital letter, and 1 special character.")
    }
    if(!isEmailValid(userData.email)){
      toast.error("Email is not valid. It must contain '@' and end with '.com'")
    }
    if (form.checkValidity() && isPasswordValid(userData.password) && isEmailValid(userData.email)) {
      handleClick("next");
    } 
  };


  return (
    <div className='flex flex-col p-4 rounded-3 border'>
       <h1 className='text-center'>Account Information</h1>
       <form ref={formRef} onSubmit={handleSubmit}>
      <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
          {" "} username
        </div>
        <div className='bg-white my-2 p-1 flex border-gray-200 rounded'>
          <input required type="text" onChange={handleChange} value={userData["username"] || ""} name='username'
            placeholder='Username' className='p-1 px-2 border rounded-3 outline-none w-full text-gray-800' />
        </div>
      </div>

      <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
          {" "} email
        </div>
        <div className='bg-white my-2 p-1 flex border-gray-200 rounded'>
      <input required type='text'  onChange={handleChange} value={userData['email'] || ''}
        name='email'  placeholder='Email' className='p-1 px-2 border rounded-3 outline-none w-full text-gray-800'
      />
  
    </div>
      </div>

      <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
          {" "} Password
        </div>
        <div className='bg-white my-2 p-1 flex border-gray-200 rounded'>
      <input required type={passShow ? 'text' : 'password'}  onChange={handleChange} value={userData['password'] || ''}
        name='password'  placeholder='Password' className='p-1 px-2 border rounded-3 outline-none w-full text-gray-800'
      />
      <button className='pl-2' type='button' onClick={() => setPassShow(!passShow)}>
        {passShow ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i> }
      </button>
    </div>
      </div>
      <StepperControl handleClick={handleClick} currStep={currStep} steps={steps}/> 
      </form>
    </div>
  )
}

export default Account