import React from 'react'
import Badge from 'react-bootstrap/Badge'

export default function BadgeNew({children, variant='danger', ...others}) {
	return (
		<>
		{children} <Badge variant={variant} {...others}>New</Badge>
		</>
	)
}