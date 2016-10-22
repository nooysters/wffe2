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

class TicketList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render () {
    let tickets = this.props.tickets
    return (
      <ul >
        {tickets.map(ticket =>
          <Ticket key={ticket.id} {...ticket} />
        )}
      </ul>
    )
  }
}

TicketList.propTypes = {
   tickets: PropTypes.array
}

export default TicketList
