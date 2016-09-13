import { combineReducers } from 'redux'
import { Ticket, TicketList } from './tickets'

let rootReducer = combineReducers({
  Ticket,
  TicketList
})

export default rootReducer
