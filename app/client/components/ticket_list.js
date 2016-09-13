import React, { PropTypes } from 'react'

const Ticket = ({attributes, id}) => (
  <li >
    title: {attributes.title}
    <br />
    description: {attributes.description}
  </li>
)

Ticket.propTypes = {
  attributes: PropTypes.object
}

const TicketList = ({ tickets }) => (
  <ul >
    {tickets.map(ticket =>
      <Ticket key={ticket.id} {...ticket} />
    )}
  </ul>
)

TicketList.propTypes = {
   tickets: PropTypes.array
}

export default TicketList
