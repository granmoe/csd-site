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
	Container,
} from 'semantic-ui-react';

const LINKS = [
	{
		name: 'About',
		icon: 'help',
		href: '/about',
	},
	{
		name: 'Contact',
		icon: 'mail',
		href: '/contact',
	},
	{
		name: 'Adoption',
		icon: 'gift',
		href: '/adoption',
	},
	{
		name: 'Home',
		icon: 'home',
		href: '/',
	},
];

export default ({children, pageName}) => (
	<div>
		<Head title="Adopt a Zoo Animal" />
		<Menu animation="overlay" width="thin" icon="labeled" vertical inverted>
			{LINKS.map(link => (
				<Link href={link.href}>
					<Menu.Item name={link.name} key={link.name}>
						<Icon name={link.icon} />
						{link.name}
					</Menu.Item>
				</Link>
			))}
		</Menu>
		{children}
	</div>
);
