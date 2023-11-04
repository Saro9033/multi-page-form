import React, { useEffect, useRef, useState } from 'react'
import Steps from './Steps';

const Stepper = ({ steps, currStep, setCurrStep }) => {
  const [newStep, setNewStep] = useState([])
  const stepRef = useRef()


  useEffect(() => {
    const stepsState = steps.map((step, index) => ({
      description: step,
      completed: index < currStep,
      highlighted: index === currStep,
      selected: index === currStep,
    }));

    stepRef.current = stepsState;
    setNewStep(stepRef.current);
  }, [steps, currStep]);

  return (
    <div className={`d-flex w-full justify-content-between align-items-center ${window.innerWidth < 500 ? "p-2" : "p-4"}`} >
      {
        newStep.map((step, index) => {
          return (
            <div key={index}  className={index !== newStep.length - 1 ? "w-full flex items-center" : "flex items-center"}>
              <Steps index={index} step={step} setCurrStep={setCurrStep} currStep={currStep}/>
            </div>)
        })
      }
    </div>
  )
}

export default Stepper