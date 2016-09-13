import fetch from 'isomorphic-fetch'

export const RECEIVE_ALL_TICKETS = 'RECEIVE_ALL_TICKETS'

export function receiveAllTickets(tickets) {
  return {
    type: RECEIVE_ALL_TICKETS,
    tickets
  }
}

export function fetchAllTickets() {
  return dispatch => {
    return fetch(`http://localhost:3000/tickets.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveAllTickets(json.data)))
  }
}
