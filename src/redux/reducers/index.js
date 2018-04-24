import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'


const reducer = (state = {}, action) => { return state }


const allReducers = combineReducers({
    reducer,
    form: formReducer
})

export const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)