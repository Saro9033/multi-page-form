import React from 'react'

const StepperControl = ({ handleClick, currStep, steps }) => {


  return (
    < >
      {currStep !== steps.length - 1 &&
        <div type="button" className=' align-items-center py-2 d-flex justify-content-between mt-4 '>
          <button style={window.innerWidth < 500 ? { fontSize: 'small' } : { fontSize: 'medium' }}
            onClick={() => handleClick("prev")} className={`btn btn-outline-primary btns rounded-3 
        ${currStep === 0 ? "opacity-50 disabled" : ""}`}>BACK</button>

        
          <button type='submit' style={window.innerWidth < 500 ? { fontSize: 'small' } : { fontSize: 'medium' }}
           className='btn btn-outline-success btns rounded-3 '>
            {currStep === steps.length - 2 ? "Submit" : "Next"}
          </button>
        </div>}
    </>
  )
}

export default StepperControl