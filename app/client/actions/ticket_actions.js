import fetch from 'isomorphic-fetch'

export const RECEIVE_ALL_TICKETS = 'RECEIVE_ALL_TICKETS'
function receiveAllTickets(tickets) {
  return {
    type: RECEIVE_ALL_TICKETS,
    tickets
  }
}

export function fetchAllTickets() {
  return function(dispatch) {
    return fetch(`http://private-febe2-flo4.apiary-mock.com/tickets`)
      .then((response) => {
        return response.json()
      })
      .then(json => dispatch(receiveAllTickets(json.data))
    )
  }
}
