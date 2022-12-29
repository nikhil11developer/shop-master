import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { employeeActions } from '../state/index';

const AddEmployee = () => {
    const dispatch=useDispatch()
    const [employee , setEmployee]=useState({})
    const handleChange=(e)=>{
        setEmployee({...employee , [e.target.name]:e.target.value})
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(employeeActions.addEmployee(employee))
    }

    return (
        <Form style={{width:'400px'}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Employee name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" onChange={handleChange} value={employee.name}/>
            <Form.Text className="text-muted">
              We'll never share your name with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control type="text" name="age" placeholder="Enter age" onChange={handleChange}  value={employee.age}/>
          </Form.Group>
          
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      );
}

export default AddEmployee