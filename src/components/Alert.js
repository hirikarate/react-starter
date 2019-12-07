import React from 'react'

// C.1: ES 5
// function Alert(props) {
// 	let classes = 'alert alert-' + props.variant
// 	return (
// 		<div className={classes} role="alert">
// 			{props.message}
// 		</div>
// 	)
// }

// C.2: ES 6: Object destructuring +  + String interpolation
// function Alert(props) {
// 	const { variant, message } = props
// 	return (
// 		<div className={`alert alert-${variant}`} role="alert">
// 			{message}
// 		</div>
// 	)
// }

// C.3: React children
function Alert(props) {
	const { variant, message, children } = props
	return (
		<div className={`alert alert-${variant}`} role="alert">
			{message || children}
		</div>
	)
}

export default Alert