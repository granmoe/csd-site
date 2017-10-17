import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class ModalExampleControlled extends Component {
  state = {
    open: false
  }

  render() {
    const { text } = this.props
    const { open } = this.state
    const isAvailable = Math.round(Math.random()) === 1

    return (
      <Modal
        trigger={<Button onClick={ () => this.setState({ open: true })}>{ text }</Button>}
        onClose={ () => this.setState({ open: false }) }
        open={open}
        basic
        size='small'
      >
        <Header icon='browser' content='Availability' />
        <Modal.Content>
          { isAvailable ? (
            <h3>Congratulations! This animal is available.</h3>
          ) : (
            <h3>Sorry, this animal is not available.</h3>
          ) }
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' inverted onClick={ () => this.setState({ open: false }) }>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
