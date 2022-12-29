const reducer = (state = { balance: 0 }, action)=>{
    switch (action.type) {
        case 'deposit':
            return { balance: state.balance + action.payload }
        case 'withdraw':
            return { balance: state.balance - action.payload }
        default:
            return state    
    }
}

export default reducer