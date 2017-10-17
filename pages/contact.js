import React, {PureComponent} from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import {
	Button,
	Header,
	Form,
	Divider,
	Radio,
	Checkbox,
} from 'semantic-ui-react';

const Title = ({name}) => (
	<div>
		<Header as="h1">{name}</Header>
		<Divider />
	</div>
);

const RADIO_BUTTONS = ['Information', 'Donation', 'Adoption'];

export default class ContactPage extends PureComponent {
	state = {
		radioValue: null,
	};

	render() {
		const {radioValue} = this.state;

		return (
			<Layout>
				<Title name="Contact Us" />
				<Form
					onSubmit={() => {
						window.location = 'contact_confirm';
					}}
				>
					<Form.Input label="Name" name="name_field" />
					{RADIO_BUTTONS.map(radioName => (
						<Form.Field
							style={{display: 'inline-block', marginRight: '15px'}}
							key={radioName}
						>
							<Radio
								name="radioGroup"
								label={radioName}
								value={radioName}
								checked={radioValue === radioName}
								onChange={() => this.setState({radioValue: radioName})}
							/>
						</Form.Field>
					))}
					<Form.Field>
						<Checkbox label="Zoo Volunteer" style={{marginRight: '15px'}} />
						<Checkbox label="E-mail Newsletter" style={{marginRight: '15px'}} />
					</Form.Field>
					<Form.Input label="Address" name="address_field" />
					<Form.Input
						label="Postcode"
						type="number"
						name="postcode_field"
					/>
					<Form.Input label="E-mail" name="email_field" />
					<Button type="submit">Submit</Button>
				</Form>
			</Layout>
		);
	}
}
