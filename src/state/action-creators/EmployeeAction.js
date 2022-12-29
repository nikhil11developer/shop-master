const namesToCaps=()=>{
    return (dispatch)=>{
        dispatch({type:'ncaps'})
    }

}

const namesToLower=()=>{
    return (dispatch)=>{
        dispatch({type:'nlower'})
    }

}

const incrementAge=()=>{
    return (dispatch)=>{
        dispatch({type:'incrage'})
    }

}

const deleteEmployee=(name)=>{
    return (dispatch)=>{
        
        dispatch({type:'delete', payload:name})
    }
}

const addEmployee=(employee)=>{
    return (dispatch)=>{
        
        dispatch({type:'add', payload:employee})
    }
}

export {namesToCaps , namesToLower, incrementAge , deleteEmployee , addEmployee}