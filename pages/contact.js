import Link from 'next/link'
import Layout from '../components/layout'
import { Button, Form } from 'semantic-ui-react'

export default () => (
  <Layout>
    <Form>
      <Form.Input label='Enter Name' />
      <Form.Input label='Enter Address' />
      <Form.Input label='Enter Postcode' type='number' />
      <Form.Input label='Enter E-mail' />
    </Form>
  </Layout>
)
