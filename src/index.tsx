import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './component/Home';
import './index.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import AddEmployee from './component/AddEmployee';
import EditEmployee from './component/EditEmployee';
import LoginPage from './component/LoginPage';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const handleSubmit=()=>{

}
root.render(
  <React.StrictMode>
    
    <Router>
      <Routes>
        <Route path="login" element={<LoginPage />}/>
        <Route  path="/home" element={<Home/>}/>
        {/* <Route  path="/edit" element={<EditEmployee data={dataToEdit} onBackBtnClickHnd={showListPage} onUpdateClickHnd={updateData}/>}/> */}
        </Routes>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
