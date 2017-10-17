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
    <Title name="About"/>
    <div>We love our animals and we only take on those who have not been taken care of very well. We need your support to help our animals grow strong but most of all feel loved. They are waiting for you.</div>
  </Layout>
)
