import React from 'react'
import Link from 'next/link'
import Head from './head'
import styled from 'styled-components'

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
    { children }
  </div>
)
