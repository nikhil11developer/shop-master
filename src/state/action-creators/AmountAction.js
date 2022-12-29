const withdrawMoney=(amount)=>{
    return (dispatch)=>{
        dispatch({type:'withdraw' , payload:amount})
    }

}

const depositMoney=(amount)=>{
    return (dispatch)=>{
        dispatch({type:'deposit' , payload:amount})
    }
}

export {withdrawMoney , depositMoney}