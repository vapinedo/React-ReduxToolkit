const redux = require('redux')

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

const cakeOrdered = (quantity = 1) => {
    return {
        type: CAKE_ORDERED,
        payload: quantity
    }
}

const cakeRestocked = (quantity = 1) => {
    return {
        type: CAKE_RESTOCKED,
        payload: quantity
    }
}

const icrecream_ordered = (quantity = 1) => {
    return {
        type: ICECREAM_ORDERED,
        payload: quantity
    }
}

const icrecream_restocked = (quantity = 1) => {
    return {
        type: ICECREAM_RESTOCKED,
        payload: quantity
    }
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIcecreams: 20
// }

const initialCakeState = {
    numOfCakes: 10
}
const initialIcecreamsState = {
    numOfIcecreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
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

const icecreamsReducer = (state = initialIcecreamsState, action) => {
    switch(action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIcecreams: state.numOfIcecreams - 1
            }
        case ICECREAM_RESTOCKED: 
            return {
                ...state,
                numOfIcecreams: state.numOfIcecreams + 1
            }
        default: 
            return state
    }
}

const store = redux.createStore(reducer)
console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() => console.log('Update state', store.getState()))

// store.dispatch(cakeOrdered())
// store.dispatch(cakeOrdered())
// store.dispatch(cakeOrdered())
// store.dispatch(cakeRestocked(3))

const actions = redux.bindActionCreators({
    cakeOrdered, cakeRestocked,
    icrecream_ordered, icrecream_restocked
}, store.dispatch)

actions.cakeOrdered()
actions.cakeOrdered()
actions.cakeOrdered()
actions.cakeRestocked(3)

actions.icrecream_ordered()
actions.icrecream_ordered()
actions.icrecream_restocked(2)

unsubscribe()