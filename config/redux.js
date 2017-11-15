import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { reducer as home } from '../containers/Home'
import { reducer as posts } from '../containers/Posts/state'

const reducers = combineReducers({
  home,
  posts
})

export const store = () => createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)
