import { getAllTickets } from '../actions/ticket_actions'

export const Ticket = (state = {
  "id": "",
  "type": "tickets",
  "links": {},
  "attributes": {},
  "relationships": {}
}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const TicketList = (state = [], action) => {
  switch (action.type) {
    case 'REQUEST_ALL_TICKETS':
      return state

    case 'RECEIVE_ALL_TICKETS':
      return action.tickets.map(t => Ticket(t, action) )
    default:
      return state
  }
}
