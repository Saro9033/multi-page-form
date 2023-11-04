import React from 'react'

const Steps = ({ step, index ,setCurrStep,currStep}) => {

    const handleStepClick = (num) =>{
        setCurrStep(num) 
       
      }

    return (
        <>
            <div className="relative flex flex-col items-center text-teal-600">
                <button style={window.innerWidth < 500 ? { fontSize: '13px' } : null} onClick={() => handleStepClick(index)} className={` rounded-full transition duration-500 ease-in-out border-2 border-gray 
       ${window.innerWidth > 500 ? "h-12 w-12" : "h-8 w-8"} flex items-center justify-center py-3
       ${step.selected ? "bg-green-600 text-white font-bold border-green-600" : ""} ${step.completed ? "bg-success" : ""}`}>
                    {step.completed ? (
                        <span className='text-white font-bold text-xl'>&#10003;</span>
                    ) : (index + 1)}
                </button>
                <div style={window.innerWidth < 500 ? { fontSize: '8px' } : null} className={`absolute top-0 text-center ${index === 5 ? 'w-15' : "w-32"} ${window.innerWidth > 500 ? "mt-16" : "mt-10"}  text-xs font-medium uppercase
                ${step.highlighted ? "text-gray-900" : "text-gray-400"}`}>
                    {step.description}
                </div>
            </div>

            <div className={`flex-auto border-t-2 transition duration-400 ease-in-out 
              ${step.completed ? "border-green-600" : "border-gray-300"}`}></div>
        </>
    )
}

export default Steps