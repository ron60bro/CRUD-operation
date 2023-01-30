import "./Home.style.css";
import { useEffect, useState } from "react";
import { dummyEmployeeList, IEmployee, PageEnum } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import { Link } from "react-router-dom";
import axios from 'axios';
const Home = () => {
  const [employeeList, setEmployeeList] = useState(
   [] as IEmployee[]
  );
  useEffect(()=>{
    let result=axios.get("http://localhost:8080/api/tutorials/all").then((res)=>{
      console.log(res.data);
      _setEmployeeList(res.data)
    })
   
    // const listInString=window.localStorage.getItem("EmployeeList")
    // if(listInString){
    //   _setEmployeeList(JSON.parse(listInString))
    // }
  },[])
  const [showPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit,setDataToEdit]=useState({} as IEmployee)

  const onAddEmployeeClickHnd=()=>{
    setShownPage(PageEnum.add)
  }


const _setEmployeeList=(list:IEmployee[])=>{
  setEmployeeList(list);
  window.localStorage.setItem("EmployeeList",JSON.stringify(list))
}

  const showListPage=()=>{
    setShownPage(PageEnum.list)
  }
  const addEmployee=(data:IEmployee)=>{
    axios.post("http://localhost:8080/api/tutorials/create",data)
    .then(resp=>console.log(resp.data,"data added"))
        _setEmployeeList([...employeeList,data])
  }
  const deleteEmployee=(data:IEmployee)=>{
    //To index from array i,e employeeList
    const indexToDelete=employeeList.indexOf(data);
    axios.delete(`http://localhost:8080/api/tutorials/${data.id}`).then(res=>console.log(res.data))
    const tempList={...employeeList}
    _setEmployeeList(Array.from(tempList))

  }
  const editEmployee=(data:IEmployee)=>{
    console.log(data.id,"id")
    
    setShownPage(PageEnum.edit);

    setDataToEdit(data)


  }

  const updateData=(data:IEmployee)=>{
    const filteredData=employeeList.filter(x=>x.id===data.id)[0];
    const indexofRecord=employeeList.indexOf(filteredData);

    const tempData=Array.from({...employeeList});
    tempData[indexofRecord]=data;
        console.log(tempData,"data")
    
        axios.put(`http://localhost:8080/api/tutorials/update/${data.id}`,data).then((res)=>(console.log("edited",res)))
    _setEmployeeList(tempData)
  }
  return (
    <>
      <article className="article-header">
        <header>
          <h1>Employee Management App</h1>
        </header>
      </article>
      <section className="section-content">
        {showPage === PageEnum.list && (
          <>
            <input type="button" value="Add Employee" onClick={onAddEmployeeClickHnd}className="add-employee-btn" />
            <EmployeeList list={employeeList} onDeleteClickHnd={deleteEmployee} onEdit={editEmployee}/>
          </>
        )}
        {
            showPage===PageEnum.add&&<AddEmployee onBackBtnClickHnd={showListPage} onSubmitClickHnd={addEmployee}/>
        }
        {
          showPage===PageEnum.edit&&<EditEmployee data={dataToEdit} onBackBtnClickHnd={showListPage} onUpdateClickHnd={updateData}/>
        } 
      </section>
    </>
  );
};
export default Home;
