import React, { useContext, useRef } from 'react'
import { StepperContext } from '../../Context/StepperContext'
import StepperControl from '../StepperControl';

const Education = ({handleClick,currStep, steps}) => {
    const { educData, setEduData } = useContext(StepperContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEduData({ ...educData, [name]: value })
    }
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
            <h1 className='text-center'>Educational Information</h1>
            <form ref={formRef} onSubmit={handleSubmit}>

            <div className='w-full flex-1'>
                <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                    {" "} Level of Education
                </div>
                <div className='bg-white my-2 p-1 flex border-gray-200 rounded'>
                    <select required
                        onChange={handleChange}
                        value={educData["LOE"] || ""}
                        name='LOE'
                        className='p-1 px-2 border rounded-3 outline-none w-full text-gray-800'>
                        <option value="">Select</option>
                        <option value="High School">High School</option>
                        <option value="Associate's Degree">Associate's Degree</option>
                        <option value="Bachelor's Degree">Bachelor's Degree</option>
                        <option value="Master's Degree">Master's Degree</option>
                        <option value="Doctorate">Doctorate</option>
                    </select>
                </div>
            </div>

            <div className='w-full mx-2 flex-1'>
                <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                    {" "} School/University ( Optional )
                </div>
                <div className='bg-white my-2 p-1 flex border-gray-200 rounded'>
                    <input type="text" onChange={handleChange} value={educData["uName"] || ""} name='uName'
                        placeholder='Anna University..' className='p-1 px-2 border rounded-3 outline-none w-full text-gray-800' />
                </div>
            </div>

            <div className='w-full mx-2 flex-1'>
                <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                    {" "} GPA (Grade Point Average)
                </div>
                <div className='bg-white my-2 p-1 flex border-gray-200 rounded'>
                    <input max='10' min='1' type="number" onChange={handleChange} value={educData["GPA"] || ""} name='GPA'
                      required  placeholder='Anna University..' className='p-1 px-2 border rounded-3 outline-none w-full text-gray-800' />
                </div>
            </div>
            <StepperControl handleClick={handleClick} currStep={currStep} steps={steps}/> 

            </form>
        </div>
    )
}

export default Education