import React from 'react'
import Alert from 'react-bootstrap/Alert'
import ProgressBar from 'react-bootstrap/ProgressBar'

import BadgeNew from '../components/BadgeNew'


export default function Challenge01() {
	return (
		<>
			<Alert variant="success">
				A simple successful <BadgeNew>alert—check</BadgeNew> it out!
			</Alert>
			<Alert variant="info">
				<h4>A simple informative alert!</h4>
				<h5>Check it out!</h5>
			</Alert>
			<br/>
			<ProgressBar now={75} />
			<br/>
			<ProgressBar now={39} variant="success" striped animated />
		</>
	)
}
