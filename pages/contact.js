import Link from 'next/link'
import Layout from '../components/layout'
import { Button, Header, Form, Divider } from 'semantic-ui-react'

const Title = ({ name }) => (
  <div>
    <Header as="h1">{ name }</Header>
    <Divider />
  </div>
)

export default () => (
  <Layout>
    <Title name="Contact Us" />
    <Form>
      <Form.Input label='Enter Name' />
      <Form.Input label='Enter Address' />
      <Form.Input label='Enter Postcode' type='number' />
      <Form.Input label='Enter E-mail' />
    </Form>
  </Layout>
)
