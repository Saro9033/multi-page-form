import React, { useContext, useRef } from 'react';
import { StepperContext } from '../../Context/StepperContext';
import StepperControl from '../StepperControl';

const PersonalDetails = ({handleClick,currStep, steps}) => {

  const { personalData, setPersonalData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalData({ ...personalData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;

    if (form.checkValidity()) {
      handleClick("next");
    } 
  };

  const formRef = useRef(null);
 
  return (
    <div className='flex flex-col p-4 rounded-3 border'>
      <h1 className='text-center'>Personal Information</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-lg-6 col-md-12 col-sm-12 '>
            <label className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase '>
              {" "}First Name
            </label>
            <div className='bg-white my-2 p-1 flex border-gray-200 rounded'>
              <input required
                type="text"
                onChange={handleChange}
                value={personalData["fname"] || ""}
                name='fname'
                placeholder='First Name'
                className='p-1 px-2 border rounded-3 outline-none w-full text-gray-800'
              />
            </div>
          </div>

          <div className='col-lg-6 col-md-12 col-sm-12  '>
            <label className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
              {" "}Last Name
            </label>
            <div className='bg-white my-2 p-1 flex border-gray-200 rounded'>
              <input required
                type="text"
                onChange={handleChange}
                value={personalData["lname"] || ""}
                name='lname'
                placeholder='Last Name'
                className='p-1 px-2 border rounded-3 outline-none w-full text-gray-800'
              />
            </div>
          </div>
        </div>

        <div className='w-full flex-1'>
          <label className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
            {" "}Birthdate
          </label>
          <div className='bg-white my-2 p-1 flex border-gray-200 rounded'>
            <input required
              type="date"
              onChange={handleChange}
              value={personalData["Bdate"]}
              name='Bdate'
              placeholder='Bdate'
              className='p-1 px-2 border rounded-3 outline-none w-full text-gray-800'
            />
          </div>
        </div>

        <div className='w-full flex-1'>
          <label className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
            {" "} Gender
          </label>
          <div className='bg-white my-2 p-1 flex justify-content-around border-gray-200 rounded'>
            <div className='d-flex'>
              <input required
                type="radio"
                onChange={handleChange}
                checked={personalData["gender"] === "Male"}
                value="Male"
                name='gender'
                className='mr-1 cursor-pointer'
              />
              Male
            </div>
            <div className='d-flex'>
              <input required
                type="radio"
                onChange={handleChange}
                checked={personalData["gender"] === "Female"}
                value="Female"
                name='gender'
                className='mr-1 cursor-pointer'
              />
              Female
            </div>
          </div>
        </div>

        <div className='w-full flex-1'>
          <label className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
            {" "} Marital Status
          </label>
          <div className='bg-white my-2 p-1 flex justify-content-around border-gray-200 rounded'>
            <div className='d-flex'>
              <input required
                type="radio"
                onChange={handleChange}
                checked={personalData["marrital"] === "Unmarried"}
                value="Unmarried"
                name='marrital'
                className='mr-1 cursor-pointer'
              />
              Unmarried
            </div>
            <div className='d-flex'>
              <input required
                type="radio"
                onChange={handleChange}
                checked={personalData["marrital"] === "Married"}
                value="Married"
                name='marrital'
                className='mr-1 cursor-pointer'
              />
              Married
            </div>
          </div>
        </div>

        <StepperControl handleClick={handleClick} currStep={currStep} steps={steps}/> 

      </form>

    </div>
  );
};

export default PersonalDetails;
