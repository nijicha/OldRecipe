import React from 'react'
import PropTypes from 'prop-types'

import Alert from './Alert'

class FlashMessages extends React.Component {

  constructor(props) {
    super(props)
    this.state = { messages: props.messages }

    window.flash_messages = this
  }

  // addMessage(message) {
  //   const messages = React.addons.update(this.state.messages, { $push: [message] })
  //   this.setState({ messages: messages })
  // }

  // removeMessage(message) {
  //   const index = this.state.messages.indexOf(message)
  //   const messages = React.addons.update(this.state.messages, { $splice: [[index, 1]] })
  //   this.setState({ messages: messages })
  // }

  render () {
    const alerts = this.state.messages.map( message =>
      <Alert key={ message.id } message={ message }/>
    )

    return(
      alerts
    )
  }
}

FlashMessages.propTypes = {
  messages: PropTypes.array.isRequired
}

export default FlashMessages
