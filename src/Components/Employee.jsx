import React, { useEffect, useState } from "react";
import { createEmployee, getEmployee, updateEmployee } from "../Services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";
export const Employee=()=>{
     const [name,setname]=useState('');
     const [address,setaddress]=useState('');
     const {id}=useParams();
     const navigator=useNavigate();

     const [errors,setErrors]=useState({
          name:"",
          address:""
     })
     useEffect(()=>{
          if(id){
               getEmployee(id).then((response)=>{
                   setname(response.data.name);
                   setaddress(response.data.address);
               }).catch(error =>{
                    console.error(error);
               })
          }
     },[id])
     function saveOrUpdateEmployee(e){
          e.preventDefault();
          if(validateForm()){
               const employee={name,address}
               console.log(employee);
               if(id){
                    updateEmployee(id,employee).then((response)=>{
                         console.log(response.data);
                         console.log("updated")
                         navigator('/employees');
                    }).catch(error=>{
                         console.error(error);
                    })
               }else{
                    createEmployee(employee).then((response)=>{
                         console.log(response.data);
                         console.log("created");
                         navigator('/employees');
                    })
               }
     }
     }
     function validateForm(){
          let valid=true;
          const errorsCopy={...errors}
          if(name.trim()){
               errorsCopy.name="";
          }
          else{
               errorsCopy.name="Name is Required";
               valid=false;
          }
          
          if(address.trim()){
               errorsCopy.address="";
          }
          else{
               errorsCopy.address="Address is Required";
               valid=false;
          }

          setErrors(errorsCopy);
          return valid;
     }
     function pageTitle(){
          if(id){
               return <h2 className="text-center">Update Employee</h2>
          }
          else{
               return <h2 className="text-center">Add Employee</h2>
          }
     }
    
     return(
    <>
    <div className="container">
     <br/><br/>
     <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
               {pageTitle()}
               <div className="card-body">
                    <form>
                   
                         <div className="form-group mb-2">
                              <label className="form-label">Name</label>
                              <input type="text" placeholder="Enter Employee Name" name="name" value={name} 
                              className={`form-control ${errors.name ? 'is-invalid':''}`} 
                              onChange={(e)=>setname(e.target.value)}>
                              </input>
                              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                         </div>
                         <div className="form-group mb-2">
                              <label className="form-label">Address</label>
                              <input type="text" placeholder="Enter Employee Address" name="address" value={address} 
                              className={`form-control ${errors.address ? 'is-invalid':''}`} 
                              onChange={(e)=>setaddress(e.target.value)}>
                              </input>
                              {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                         </div>
                         <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Submit</button>
                    </form>
               </div>
          </div>
     </div>
    
    </div>
    </>
     );
}
