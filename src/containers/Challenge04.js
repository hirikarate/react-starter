import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

import PopTooltip from '../components/PopTooltip'


export default function Challenge03() {
	return (
		<PopTooltip
			target={
				<Button variant="secondary">
					Click me to pop!
				</Button>
			}
		>
			<Alert variant="danger">
				<h6>Wow!</h6>
				An <Badge variant="primary">alert</Badge> in a Popover!
			</Alert>
		</PopTooltip>
	)
}
