import  { combineReducers } from 'redux'
import fetchNews from './fetch-news'


const rootReducer = combineReducers({
 fetchNews,

})

export default rootReducer