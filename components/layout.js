import React from 'react';
import Link from 'next/link';
import Head from './head';
import styled from 'styled-components';
import {
	Grid,
	Sidebar,
	Segment,
	Button,
	Menu,
	Image,
	Icon,
	Header,
	Container,
} from 'semantic-ui-react';

const Content = styled.div`
  margin-left: 100px;
  margin-top: 15px;
  margin-right: 15px;
`

const LINKS = [
	{
		name: 'Home',
		icon: 'home',
		href: '/',
	}, {
		name: 'Adoption',
		icon: 'gift',
		href: '/adoption',
	}, {
		name: 'Contact',
		icon: 'mail',
		href: '/contact',
	}, {
		name: 'About',
		icon: 'help',
		href: '/about',
	}
];

export default ({children, pageName}) => (
	<div>
		<Head title="Adopt a Zoo Animal" />
		<Container>
			<Menu
				fixed="left"
				animation="overlay"
				width="thin"
				icon="labeled"
				vertical
				inverted
			>
				{LINKS.map(({href, name, icon}) => (
					<Link href={href} key={name}>
						<Menu.Item fitted="horizontally" name={name}>
							{name}
							<Icon name={icon} />
						</Menu.Item>
					</Link>
				))}
			</Menu>
		</Container>
		<Content>{children}</Content>
	</div>
);
