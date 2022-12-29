import { combineReducers } from "redux";
import AmountReducer from './AmountReducer'
import EmployeeReducer from './EmployeeReducer'


const reducers=combineReducers({
    amount:AmountReducer,
    employees:EmployeeReducer
    
})

export default reducers
