import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Challenge01 from './containers/Challenge01'
import Challenge02 from './containers/Challenge02'
import Challenge03 from './containers/Challenge03'
import Challenge04 from './containers/Challenge04'
import Challenge05 from './containers/Challenge05'
import Challenge06 from './containers/Challenge06'
import Challenge07 from './containers/Challenge07'
import Challenge08 from './containers/Challenge08'
import Challenge09 from './containers/Challenge09'
import Challenge10 from './containers/Challenge10'
import './App.css'


export default class App extends React.Component {
	render() {

		return (
			<Container as="main" className="my-5">
				<Row className="mb-3">
					<Col>
						<h5>Challenge 10</h5>
						<Challenge10 />
					</Col>
				</Row>
				<Row className="mb-3">
					<Col>
						<h5>Challenge 09</h5>
						<Challenge09 />
					</Col>
				</Row>
				<Row className="mb-3">
					<Col>
						<h5>Challenge 05</h5>
						<Challenge05 />
					</Col>
					<Col>
						<h5>Challenge 06</h5>
						<Challenge06 />
					</Col>
				</Row>
				<Row className="mb-3">
					<Col>
						<h5>Challenge 07</h5>
						<Challenge07 />
					</Col>
					<Col>
						<h5>Challenge 09</h5>
						<Challenge08 />
					</Col>
				</Row>
				<Row className="mb-3">
					<Col>
						<h5>Challenge 02</h5>
						<Challenge02 />
					</Col>
					<Col>
						<h5>Challenge 04</h5>
						<Challenge04 />
						<br/>
						<br/>

						<h5>Challenge 03</h5>
						<Challenge03 />
						<br/>
						<br/>
						<h5>Challenge 01</h5>
						<Challenge01 />
					</Col>
				</Row>
			</Container>
		)
	}
}
