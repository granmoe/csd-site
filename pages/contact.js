import React, { PureComponent } from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import { Button, Header, Form, Divider, Radio } from 'semantic-ui-react'

const Title = ({ name }) => (
  <div>
    <Header as="h1">{ name }</Header>
    <Divider />
  </div>
)

const RADIO_BUTTONS = ['Information', 'Donation', 'Adoption']

export default class ContactPage extends PureComponent {
  state = {
    radioValue: null
  }

  render () {
    const { radioValue } = this.state

    return (
      <Layout>
        <Title name="Contact Us" />
        <Form>
          <Form.Input label='Enter Name'  name="name_field"/>
          { RADIO_BUTTONS.map(radioName => (
            <Form.Field style={{ display: 'inline-block', marginRight: '15px' }}>
              <Radio
                key={ radioName }
                name='radioGroup'
                label={ radioName }
                value={ radioName }
                checked={ radioValue === radioName }
                onChange={() => this.setState({ radioValue: radioName })}
              />
            </Form.Field>
          )) }
          <Form.Input label='Enter Address' name="address_field"/>
          <Form.Input label='Enter Postcode' type='number'  name="postcode_field"/>
          <Form.Input label='Enter E-mail'  name="email_field"/>
        </Form>
      </Layout>
    )
  }
}
