import React from 'react'
import Link from 'next/link'
import Head from './head'
import styled from 'styled-components'

const Navbar = styled.div`
  display: flex;
  align-items: space-around;
  padding: 5px 10px;
  background-color: black;
  width: 100%;
`

const NavLinkWrapper = styled.div`
  color: white;
`

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
    <Navbar>
      { LINKS.map(({ name, href }) => (
        <NavLinkWrapper key={ name }>
          <Link href={ href }>{ name }</Link>
        </NavLinkWrapper>
      )) }
    </Navbar>
    { children }
  </div>
)
