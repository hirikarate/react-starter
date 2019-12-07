import React from 'react'
import Form from 'react-bootstrap/Form'


// export default function FormControl(props) {
// 	return (
// 		<Form.Group controlId={props.id}>
// 			<Form.Label>{props.label}</Form.Label>
// 			<Form.Control type={props.type} placeholder={props.placeholder} />
// 		</Form.Group>
// 	)
// }

export default function FormControl({ id, label, type, placeholder }) {
	return (
		<Form.Group controlId={id}>
			<Form.Label>{label}</Form.Label>
			<Form.Control type={type} placeholder={placeholder} />
		</Form.Group>
	)
}