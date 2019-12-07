import React from 'react'
import PropTypes from 'prop-types'
import BsCard from 'react-bootstrap/Card'

class Card extends React.Component {
	render() {
		const {header: CardHeader, title, children, bg="primary", text="black", ...others} = this.props
		return (
			<BsCard {...others}>
				{ CardHeader
					? <BsCard.Header className={`text-${text} bg-${bg}`}>
						<CardHeader />
					  </BsCard.Header>
					: null
				}
				<BsCard.Body>
					{ title &&
						<BsCard.Title as="h5">{title}</BsCard.Title>
					}
					{children}
				</BsCard.Body>
			</BsCard>
		)
	}
}

Card.propTypes = {
	header: PropTypes.elementType,
	title: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
	]),
}

export default Card
