const reducer = (employees = [{ name: 'amit', age: 21 },
{ name: 'neha', age: 20 },
{ name: 'jatin', age: 19 },
{ name: 'vishal', age: 22 },
{ name: 'vaibhav', age: 31 }], action) => {
    switch (action.type) {
        case 'namecaps':
            return employees.map((employee) => { return { ...employee, name: employee.name.toUpperCase() } })
        case 'namesmall':
            return employees.map((employee) => { return { ...employee, name: employee.name.toLowerCase() } })
        case 'incrage':
            return employees.map((employee) => { return { ...employee, age: employee.age + 1 } })
        case 'agegt25':
            return employees.filter((employee) => employee.age > 25)
        case 'delete':
            return employees.filter((employee) => employee.name != action.payload)
        case 'add':
            console.log(action.payload)
            return [...employees, action.payload ]
        default:
            return employees
    }

}


export default reducer