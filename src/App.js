import { useState } from 'react';
import './App.css';
import Stepper from './Components/Stepper';
import Account from './Components/Steps/Account';
import Complete from './Components/Steps/Complete';
import PersonalDetails from './Components/Steps/PersonalDetails';
import { StepperContext } from './Context/StepperContext';
import Contact from './Components/Steps/Contact';
import Education from './Components/Steps/Education';
import toast, { Toaster } from 'react-hot-toast'
import Check from './Components/Steps/Check';

function App() {
  const [currStep, setCurrStep] = useState(0)
  const [userData, setUserData] = useState('')
  const [personalData, setPersonalData] = useState('')
  const [coninfo, setConInfo] = useState('')
  const [educData, setEduData] = useState('')
  const [finalData, setFinalData] = useState([])
  const steps = [
    "Personal",
    "Account",
    "Contact",
    "Education",
    "Check",
    "Complete"]


  const displayStep = (step) => {
    switch (step) {
      case 0:
        return <PersonalDetails handleClick={handleClick} currStep={currStep} steps={steps} />
      case 1:
        return <Account handleClick={handleClick} currStep={currStep} steps={steps} />
      case 2:
        return <Contact handleClick={handleClick} currStep={currStep} steps={steps} />
      case 3:
        return <Education handleClick={handleClick} currStep={currStep} steps={steps} />
      case 4:
        return <Check handleClick={handleClick} currStep={currStep} steps={steps} />
      case 5:
        return <Complete />
      default:
    }
  }

  const handleClick = async (dir) => {
    let newStep = currStep;
    dir === "next" ? newStep++ : newStep--;
    newStep > -1 && newStep < steps.length && setCurrStep(newStep);

    if (dir === "next" ) {
      handleStoring(currStep)
    }
    console.log("Submitted");

    if (currStep === 4) {
      console.log("Submitted");
    }
  }


  function handleStoring(step) {
    switch (step) {
      case 0:
        return storeFormData1(personalData)
      case 1:
        return storeFormData2(userData)
      case 2:
        return storeFormData3(coninfo)
      case 3:
        return storeFormData4(educData)
      case 4:
        return storeFormData5(personalData, userData, coninfo, educData)
      default:
    }
  }


  async function storeFormData1(personalData) {
    const { fname, lname, Bdate, gender, marrital } = personalData
    const Options = {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json'
      },
      body: JSON.stringify({
        fname, lname, Bdate, gender, marrital
      })
    }
    const res = await fetch("https://multi-form-fef42-default-rtdb.firebaseio.com/FormData1.json", Options)
    if (res) {
      toast.success("success");
    }
    else {
      toast.error("Data not Stored")
    }
  }

  async function storeFormData2(userData) {
    const { username, password } = userData
    const Options = {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json'
      },
      body: JSON.stringify({
        username, password
      })
    }
    const res = await fetch("https://multi-form-fef42-default-rtdb.firebaseio.com/FormData2.json", Options)
    if (res) {
      toast.success("success");
    }
    else {
      toast.error("Data not Stored")
    }
  }

  async function storeFormData3(userData) {
    const { number, country, address } = userData
    const Options = {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json'
      },
      body: JSON.stringify({
        number, country, address
      })
    }
    const res = await fetch("https://multi-form-fef42-default-rtdb.firebaseio.com/FormData3.json", Options)
    if (res) {
      toast.success("success");
    }
    else {
      toast.error("Data not Stored")
    }
  }

  async function storeFormData4(userData) {
    const { LOE, uName, GPA } = userData
    const Options = {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json'
      },
      body: JSON.stringify({
        LOE, uName, GPA
      })
    }
    const res = await fetch("https://multi-form-fef42-default-rtdb.firebaseio.com/FormData4.json", Options)
    if (res) {
      toast.success("success");
    }
    else {
      toast.error("Data not Stored")
    }
  }

  async function storeFormData5(userData1, userData2, userData3, userData4) {
    const { fname, lname, Bdate, gender, marrital } = userData1
    const { username, password } = userData2
    const { number, country, address } = userData3
    const { LOE, uName, GPA } = userData4
    const Options = {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json'
      },
      body: JSON.stringify({
        fname, lname, Bdate, gender, marrital, username, password, number, country, address, LOE, uName, GPA
      })
    }
    const res = await fetch("https://multi-form-fef42-default-rtdb.firebaseio.com/FormData5.json", Options)
    if (res) {
      toast.success("success");
    }
    else {
      toast.error("Data not Stored")
    }
  }



  return (
    <div className="md:w-1/2 m-auto shadow-lg rounded-2xl pb-2 bg-white  ">
      <Toaster />
      <div className='container horizontal mt-5 '>
        <Stepper steps={steps} currStep={currStep} setCurrStep={setCurrStep} />
        <div className='my-2 p-4'>
          <StepperContext.Provider value={{
            userData, setUserData,
            finalData, setFinalData,
            personalData, setPersonalData, coninfo, setConInfo, educData, setEduData
          }}>
            {displayStep(currStep)}
          </StepperContext.Provider>
        </div>
      </div>
      {/* <StepperControl handleClick={handleClick} currStep={currStep} steps={steps} /> */}

    </div>
  );
}

export default App;
