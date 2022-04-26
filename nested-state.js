const redux = require('redux')
const produce = require('immer').produce

const initialState = {
    name: 'Valp',
    address: {
        street: 'Carrera 5 #27b - 24',
        city: 'Riohacha',
        state: 'La Guajira',
    },
}

const STREET_UPDATE = 'STREET_UPDATE'

const streetUpdate = (street) => {
    return {
        type: STREET_UPDATE,
        payload: street
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case STREET_UPDATE:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     },
            // }
            return produce(state, (draft) => {
                draft.address.street = action.payload
            })
        default:
            return state
    }
}

const store = redux.createStore(reducer)
console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('Update state', store.getState())
})

store.dispatch(streetUpdate('Calle 27 #7 - 20'))
unsubscribe()