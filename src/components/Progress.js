import React from 'react'
import PropTypes from 'prop-types'


// C.1: ES 5
// const Progress = (props) => (
// 	<div className="progress">
// 		<div
// 			style={{ width: props.value + '%' }} aria-valuenow={props.value} aria-valuemin="0" aria-valuemax="100"
// 			className="bg-warning progress-bar-striped progress-bar-animated progress-bar" role="progressbar"
// 		>
// 		</div>
// 	</div>
// )

// C.2: ES 6: Object destructuring + String interpolation
// const Progress = ({value, variant, isStriped, isAnimated}) => (
// 	<div className="progress">
// 		<div
// 			style={{ width: `${value}%` }} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"
// 			className={`bg-${variant} ${ isStriped ? 'progress-bar-striped' : ''} ${isAnimated && 'progress-bar-animated'} progress-bar`} role="progressbar"
// 		>
// 		</div>
// 	</div>
// )

// C.3: Function with body
const Progress = ({value, variant, isStriped = true, isAnimated}) => {
	const clzStrip = isStriped ? 'progress-bar-striped' : ''
	const clzAni = isAnimated && 'progress-bar-animated'
	const clzVariant = variant && 'bg-' + variant
	return (
		<div className="progress">
			<div
				style={{ width: `${value}%` }} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"
				className={`${clzVariant} ${clzStrip} ${clzAni} progress-bar`} role="progressbar"
			>
			</div>
		</div>
	)
}

Progress.propTypes = {
	value: PropTypes.number.isRequired,
	isStriped: PropTypes.bool,
	isAnimated: PropTypes.bool,
	variant: PropTypes.oneOf(['success', 'danger', 'info']),
}

export default Progress