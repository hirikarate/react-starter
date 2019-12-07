import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'


export default function FormTextField(props) {
	const { id, label, type, isValid, error, ...others } = props
	const clzInput = isValid === true
		? 'border border-success'
		: isValid === false
			? 'border border-danger'
			: ''
	let { className='' } = props
	className = `${className} ${clzInput}`

	return (
		<Form.Group controlId={id}>
			<Form.Label>{label}</Form.Label>
			<Form.Control type={type} className={className} {...others} />
			{ isValid === false
				? <span className="text-danger">{error}</span>
				: null
			}
		</Form.Group>
	)
}

FormTextField.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes
		.oneOfType([
			PropTypes.string,
			PropTypes.node,
		])
		.isRequired,
	type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'date']),
	isValid: PropTypes.bool,
	error: PropTypes.string,
}