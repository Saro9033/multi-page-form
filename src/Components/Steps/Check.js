import React, { useContext, useRef } from 'react'
import { StepperContext } from '../../Context/StepperContext';
import StepperControl from '../StepperControl';

const Check = ({handleClick,currStep, steps}) => {
    const { personalData, userData, coninfo, educData } = useContext(StepperContext);
    const formRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = formRef.current;

        if (form.checkValidity()) {
          handleClick("next");
        } 
      };
  return (
    <div id="accordion">
        <form action=""  ref={formRef} onSubmit={handleSubmit}> 
    <div className="card">
      <div className="card-header"  data-bs-toggle="collapse" href="#collapseOne">
        <a className="btn" >
          Personal Information
        </a>
      </div>
      <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
        <div className="card-body">
          <ul>
            <li>Name : {personalData.fname} {personalData.lname}</li>
            <li>DOB : {personalData.Bdate} </li>
            <li>Gender : {personalData.gender} </li>
            <li>Marital Status : {personalData.marrital} </li>
          </ul>
        </div>
      </div>
    </div>
  
    <div className="card">
      <div className="card-header"  data-bs-toggle="collapse" href="#collapseTwo">
        <a className="btn" >
          Account Information
        </a>
      </div>
      <div id="collapseTwo" className="collapse show" data-bs-parent="#accordion">
        <div className="card-body">
          <ul>
            <li>Username : {userData.username} </li>
            <li>Email : {userData.email} </li>
            <li>Password : {userData.password} </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="card-header"  data-bs-toggle="collapse" href="#collapseThree">
        <a className="btn" >
          Contact Information
        </a>
      </div>
      <div id="collapseThree" className="collapse show" data-bs-parent="#accordion">
        <div className="card-body">
          <ul>
            <li>Phone : {coninfo.number} </li>
            <li>Country : {coninfo.country} </li>
            <li>Address : {coninfo.address} </li>
          </ul>
        </div>
      </div>
    </div> 

    <div className="card">
      <div className="card-header"  data-bs-toggle="collapse" href="#collapseFour">
        <a className="btn" >
          Education Information
        </a>
      </div>
      <div id="collapseFour" className="collapse show" data-bs-parent="#accordion">
        <div className="card-body">
          <ul>
            <li>Level of Education : {educData.LOE} </li>
            <li>{educData.uName ? `School/University : ${educData.uName}` : ""}</li>
            <li>GPA : {educData.GPA} </li>
          </ul>
        </div>
      </div>
    </div> 
    <StepperControl handleClick={handleClick} currStep={currStep} steps={steps}/>
    </form> 
  </div>
  )
}

export default Check