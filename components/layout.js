import React from 'react';
import Link from 'next/link';
import Head from './head';
import styled from 'styled-components';
import {
	Sidebar,
	Segment,
	Button,
	Menu,
	Image,
	Icon,
	Header,
} from 'semantic-ui-react';

const LINKS = [
	{
		name: 'About',
		href: '/about',
	},
	{
		name: 'Contact',
		href: '/contact',
	},
	{
		name: 'Adoption',
		href: '/adoption',
	},
	{
		name: 'Home',
		href: '/',
	},
];

export default ({children, pageName}) => (
	<div>
		<Head title="Adopt a Zoo Animal" />
		<Sidebar.Pushable as={Segment}>
			<Sidebar
				as={Menu}
				animation="overlay"
				width="thin"
				visible={true}
				icon="labeled"
				vertical
				inverted
			>
				{LINKS.map(link => (
					<Menu.Item name={link.name}>
						<Icon name={link.name.toLowerCase()} />
						{link.name}
					</Menu.Item>
				))}
			</Sidebar>
			{children}
			{/* <Sidebar.Pusher>
	  <Segment basic>
		<Header as='h3'>Application Content</Header>
		<Image src='/assets/images/wireframe/paragraph.png' />
	  </Segment>
	</Sidebar.Pusher> */}
		</Sidebar.Pushable>
	</div>
);
