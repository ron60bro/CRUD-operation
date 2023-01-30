import React, { useState } from 'react';
import { IEmployee } from './Employee.type';
import "./EmployeeForm.style.css"
type Props={
    data:IEmployee;
    onBackBtnClickHnd:()=>void;
    onUpdateClickHnd:(data: IEmployee)=>void;
}
const EditEmployee = (props:Props) => {
    const {data,onBackBtnClickHnd,onUpdateClickHnd}=props;
    const[firstName,setFirstName]=useState(data.firstName);
    const[lastName,setLastName]=useState(data.lastName);
    const[email,setEmail]=useState(data.email);
    const onFirstNameChangeHnd=(e:any)=>{
        setFirstName(e.target.value)
    }
    const onLastNameChangeHnd=(e:any)=>{
        setLastName(e.target.value)
    }
    const onEmailChangeHnd=(e:any)=>{
        setEmail(e.target.value)
    }
    const onSubmitBtnClickHnd=(e:any)=>{
        e.preventDefault();
            const updateData: IEmployee={
                id: data.id,
                firstName,
                lastName,
                email
            }
          onUpdateClickHnd(updateData)
            onBackBtnClickHnd()
    }
  return (
    <div className="form-container">
    <div>
        <h3>Add EMployee Form</h3>
    </div>
    <form onSubmit={onSubmitBtnClickHnd}>
        <div>
            <label>First Name: </label>
            <input type="text" value={firstName} onChange={onFirstNameChangeHnd}/>
        </div>
        <div>
            <label>Last Name: </label>
            <input type="text" value={lastName} onChange={onLastNameChangeHnd}/>
        </div>
        <div>
            <label>Email Add: </label>
            <input type="text" value={email} onChange={onEmailChangeHnd}/>
        </div>
        <div>
            <input type="button" value="back" onClick={onBackBtnClickHnd}/>
            <input type="submit" value="Update Employee"/>
        </div>
    </form>
    </div>

  )
}

export default EditEmployee