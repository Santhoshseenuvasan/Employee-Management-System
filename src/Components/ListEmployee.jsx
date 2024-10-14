import React, { useEffect, useState, } from 'react'
import { deleteEmployee, listEmployees } from '../Services/EmployeeService'
import {useNavigate} from 'react-router-dom'
const ListEmployee=()=> {
    
    const [employees, setEmployees]=useState([])
    const navigator=useNavigate();
   

    useEffect(()=>{
        getAllEmployees();
    },[])

    function getAllEmployees(){
        listEmployees().then((response)=>{
            setEmployees(response.data);
        }).catch(error=>{
            console.error(error);
        })
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }
    function updateEmployee(id){
        navigator (`/edit-employee/${id}`)
   }

   function removeEmployee(id){
        console.log(id);

        deleteEmployee(id).then((response)=>{
           getAllEmployees();
        }).catch(error=>{
            console.error(error);
        })
      }

return (
<>
     <div className='container'>
    
        <h2 className='text-center'>List of Employee</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered' >
        <thead>
            <tr>
                <th>Employee id</th>
                <th>Employee name</th>
                <th>Employee address</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                employees.map(employee =>
                    <tr key ={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.address}</td>
                    
                    <td><button className='btn btn-info' onClick={()=>updateEmployee(employee.id)}>Update</button></td>
                    <td>
                    <button className='btn btn-danger' onClick={()=>removeEmployee(employee.id)}
                     style={{marginLeft:'10px'}}>Delete</button></td>
                    
                    </tr>)
            }
        </tbody>
        </table>
     </div>
</>
  )
}

export default ListEmployee;