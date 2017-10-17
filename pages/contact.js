import React, {PureComponent} from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import {
	Button,
	Header,
	// Form,
	Divider,
	Label,
	// Radio,
	// Checkbox,
} from 'semantic-ui-react';

import {
	Form,
	Input,
	TextArea,
	Checkbox,
	Radio,
	RadioGroup,
	Dropdown,
	Select,
} from 'formsy-semantic-ui-react';

const Title = ({name}) => (
	<div>
		<Header as="h1">{name}</Header>
		<Divider />
	</div>
);

const errorLabel = <Label color="red" pointing />;

const RADIO_BUTTONS = ['Information', 'Donation', 'Adoption'];

const styles = {
  form: {
    maxWidth: '400px',
    margin: 'auto'
  },
	checkBox: {
		display: 'inline-block',
	},
	radioButton: {
		display: 'inline-block',
		marginRight: '15px',
	},
};

export default class ContactPage extends PureComponent {
	state = {
		radioValue: null,
	};

	render() {
		const {radioValue} = this.state;

		return (
			<Layout>
				<Title name="Contact Us" />
				<Form style={styles.form}
					onValidSubmit={() => {
						window.location = 'contact_confirm';
					}}
				>
					<Form.Input
						name="name_field"
						label="Enter Name"
						required
						validationErrors={{
							isDefaultRequiredValue: 'Name is Required',
						}}
						errorLabel={errorLabel}
					/>
					{RADIO_BUTTONS.map(radioName => (
						<Form.Field style={styles.radioButton} key={radioName}>
							<Form.Radio
								name="radioGroup"
								label={radioName}
								value={radioName}
								checked={radioValue === radioName}
								onChange={() => this.setState({radioValue: radioName})}
							/>
						</Form.Field>
          ))}
          <br/>
					Would you like to make a donation?
					<Form.Input
						labelPosition="right"
						type="text"
						placeholder="Amount"
						name="donation_amount"
					>
						<Label basic>$</Label>
						<input />
						<Label>.00</Label>
					</Form.Input>
					<Form.Field>
						<Checkbox
							name="volunteer"
							label="Zoo Volunteer"
							style={styles.checkBox}
						/>
						<Checkbox
							name="volunteer"
							label="Email Newsletter"
							style={styles.checkBox}
						/>
					</Form.Field>
					<Form.Input
						name="address_field"
						label="Enter Address"
						required
						validationErrors={{
							isDefaultRequiredValue: 'Address is Required',
						}}
						errorLabel={errorLabel}
					/>
					<Form.Input
						name="postcode_field"
						label="Enter Post Code"
						required
						validationErrors={{
							isDefaultRequiredValue: 'Post Cod is Required',
						}}
						errorLabel={errorLabel}
					/>
					<Form.Input
						name="email_field"
						label="Enter Email"
						required
						validationErrors={{
							isDefaultRequiredValue: 'Email is Required',
						}}
						errorLabel={errorLabel}
					/>
					<Button type="submit">Submit</Button>
				</Form>
			</Layout>
		);
	}
}
