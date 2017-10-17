import React from 'react'
import Link from 'next/link'
import Head from './head'
import styled from 'styled-components'
import { Container } from 'semantic-ui-react'

const LINKS = [
  {
    name: 'About',
    href: '/about'
  }, {
    name: 'Contact',
    href: '/contact'
  }, {
    name: 'Adoption',
    href: '/adoption'
  }, {
    name: 'Home',
    href: '/'
  }
]

export default ({ children, pageName }) => (
  <div>
    <Head title="Adopt a Zoo Animal" />
    <Container>
      { children }
    </Container>
  </div>
)
