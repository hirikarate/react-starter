import React from 'react'
import Button from 'react-bootstrap/Button'

import Modal from '../components/Modal'


export default function Challenge08() {
	return (
		<Modal
			header={<b className="text-danger">Modal title</b>}
			footer={() => <>
				<Button variant="secondary">Close</Button>
				<Button variant="primary">Save changes</Button>
			</>}
		>
			<p>Modal body text goes here.</p>
		</Modal>
	)
}
