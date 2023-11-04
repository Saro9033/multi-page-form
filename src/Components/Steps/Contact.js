import React, { useContext, useRef } from 'react'
import { StepperContext } from '../../Context/StepperContext'
import StepperControl from '../StepperControl';
import toast from 'react-hot-toast';

const Additional = ({handleClick,currStep, steps}) => {
    const { coninfo, setConInfo } = useContext(StepperContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setConInfo({ ...coninfo, [name]: value })
    }

    const isPhoneNumberValid = (phoneNumber) => {
        const phoneNumberRegex = /^\d{10}$/;
        return phoneNumberRegex.test(phoneNumber);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = formRef.current;

        if(!isPhoneNumberValid(coninfo.number)){
            toast.error("Phone number is not valid. It must contain 10 numbers.")
          }

        if (form.checkValidity() && isPhoneNumberValid(coninfo.number)) {
          handleClick("next");
        } 
      };
    
      const formRef = useRef(null);
    return (
        <div className='flex flex-col p-4 rounded-3 border'>
            <h1 className='text-center h5'>Contact Information</h1>
            <form ref={formRef} onSubmit={handleSubmit}>

            <div className='w-full  flex-1'>
                <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                    {" "} Phone Number
                </div>
                <div className='bg-white my-2 p-1 flex border-gray-200 rounded'>
                    <input required
                        type="text"
                        onChange={handleChange}
                        value={coninfo["number"] || ""}
                        name='number'
                        placeholder='Number'
                        className='p-1 px-2 border rounded-3 outline-none w-full text-gray-800'
                    />
                </div>
            </div>

            <div className='w-full flex-1'>
                <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                    {" "} Country
                </div>
                <div className='bg-white my-2 p-1 flex border-gray-200 rounded'>
                    <select required
                        onChange={handleChange}
                        value={coninfo["country"] || ""}
                        name='country'
                        className='p-1 px-2 border rounded-3 outline-none w-full text-gray-800'>
                        <option value="">Select a country</option>
                        <option value="USA">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Canada">India</option>
                        <option value="Canada">United Kingdom</option>
                        <option value="Canada">China</option>
                        <option value="Canada">Russia</option>
                    </select>
                </div>
            </div>

            <div className='w-full  flex-1'>
                <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                    {" "} Address
                </div>
                <div className='bg-white my-2 p-1 flex border-gray-200 rounded'>
                    <input required
                        type="text"
                        onChange={handleChange}
                        value={coninfo["address"] || ""}
                        name='address'
                        placeholder='Address'
                        className='p-1 px-2 border rounded-3 outline-none w-full text-gray-800'
                    />
                </div>
            </div>
            <StepperControl handleClick={handleClick} currStep={currStep} steps={steps}/> 
</form>
        </div>
    )
}

export default Additional