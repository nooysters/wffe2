import { connect } from 'react-redux'
import { fetchAllTickets } from '../actions/ticket_actions'
import TicketList from '../components/ticket_list'

const VisibleticketList = connect(mapStateToProps)(TicketList)

function mapStateToProps(state) {
  return {tickets: state.TicketList}
}
export default VisibleticketList
