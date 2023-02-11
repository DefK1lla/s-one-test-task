import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import userPersist from './middlewares/userPersist'
import { userReducer } from './reducers/userReducer'

const rootReducer = combineReducers({
  user: userReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, userPersist))
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
