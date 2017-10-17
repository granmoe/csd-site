import { Divider, Header } from 'semantic-ui-react'

export default ({ name, children }) => (
  <div>
    <Header as="h1">{ name }</Header>
    <Divider />
    { children }
  </div>
)