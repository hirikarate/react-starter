import React from 'react'


class Card extends React.Component {
	render() {
		return (
			<div className="card">
				<h5 className="card-header text-white bg-primary">Header</h5>
				<div className="card-body">
					<h5 className="card-title">Primary card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				</div>
			</div>
		)
	}
}

export default Card
