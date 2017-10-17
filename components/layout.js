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
		<Grid celled divided={false}>
			<Grid.Row>
				<Grid.Column width={3}>
					<Menu
						animation="overlay"
						width="thin"
						floated={true}
						icon="labeled"
						vertical
						inverted
					>
						{LINKS.map(({ href, name, icon}) => (
							<Link href={href}>
								<Menu.Item name={name} key={name}>
									<Icon name={icon} />
									{name}
								</Menu.Item>
							</Link>
						))}
					</Menu>
				</Grid.Column>
				<Grid.Column width={13}>{children}</Grid.Column>
			</Grid.Row>
		</Grid>
	</div>
);
