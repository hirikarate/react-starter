import React from 'react'
import PropTypes from 'prop-types'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'


export default function PopTooltip(props) {
	const { placement = 'top', target, children } = props
	return (
		<OverlayTrigger
			trigger="click"
			placement={placement}
			overlay={
				<Popover id={`popover-positioned-${placement}`}>
					<Popover.Content>
						{children}
					</Popover.Content>
				</Popover>
			}
		>
			{target}
			{/* <Button variant="secondary">
				Popover on {placement}
			</Button> */}
		</OverlayTrigger>
	)
}

PopTooltip.propTypes = {
	placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
	target: PropTypes.node.isRequired,
}