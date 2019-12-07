import React from 'react'
import PropTypes from 'prop-types'


export default function MediaObject({src, alt, size, children}) {
	return (
		<div className="media">
			<img width={size} height={size} src={src} alt={alt} className="align-self-center mr-3" />
			<div className="media-body">
				{children}
			</div>
		</div>
	)
}

MediaObject.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string,
	size: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
}