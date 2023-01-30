import { useState } from "react"
import { IEmployee } from "./Employee.type";
import "./EmployeeForm.style.css";
import axios from "axios";
type Props={
    onBackBtnClickHnd:()=>void;
    onSubmitClickHnd:(data: IEmployee)=>void
}

export const AddEmployee=(props:Props)=>{

    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[email,setEmail]=useState("")
    const {onBackBtnClickHnd,onSubmitClickHnd}=props
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
            const data: IEmployee={
                id: new Date().toJSON().toString(),
                firstName,
                lastName,
                email
            }
            onSubmitClickHnd(data)
            onBackBtnClickHnd()
    }
    return <div className="form-container">
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
            <input type="submit" value="Add Employee"/>
        </div>
    </form>
    </div>
}
export default AddEmployee