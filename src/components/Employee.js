import React from 'react'
import { Container, Table , Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { employeeActions } from '../state/index'


const Employee = () => {
    const dispatch=useDispatch()
    const employees = useSelector(state => state.employees)
    console.log(employees)
    return (
        <Container style={{width:'400px'}}>
            <Table>
                <thead>

                    <th>NAME</th>
                    <th>AGE</th>
                    <th>UPDATE</th>
                    <th>DELETE</th>

                </thead>
                <tbody>
                {
                    employees.map((employee) => {
                        return <tr>
                            <td>{employee.name}</td>
                        <td>{employee.age}</td>
                        
                        <td><Button variant="success" >Update</Button></td>
                        <td><Button variant="danger" onClick={()=>{dispatch(employeeActions.deleteEmployee(employee.name))}} >Delete</Button></td>
                        </tr>
                    })
                }
                </tbody>
            </Table>
        </Container>
    )
}

export default Employee