const redux = require('redux')

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

const cakeOrdered = () => {
    return {
        type: CAKE_ORDERED,
        payload: 1 
    }
}

const cakeRestocked = (quantity = 1) => {
    return {
        type: CAKE_RESTOCKED,
        payload: quantity
    }
}

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED: 
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default: 
            return state
    }
}

const store = redux.createStore(reducer)
console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() => console.log('Update state', store.getState()))

store.dispatch(cakeOrdered())
store.dispatch(cakeOrdered())
store.dispatch(cakeOrdered())
store.dispatch(cakeRestocked(3))

unsubscribe()