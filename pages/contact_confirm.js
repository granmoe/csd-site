import Link from 'next/link';
import Layout from '../components/layout';
import Title from '../components/title';
import {Button, Header, Form, Divider} from 'semantic-ui-react';

export default () => (
	<Layout>
		<Title name="We have your message">
			Many thanks for your message. We will contact you about your query as soon
			as possible. In the mean time why not have a look at our list of animals
			we have available for adoption in the <Link href="adoption">adoption</Link> page.
		</Title>
	</Layout>
);
