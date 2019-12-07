import React from 'react'

import Alert from './components/Alert'
import Card from './components/Card'
import Progress from './components/Progress'
// import ProgressInfo from './components/ProgressInfo'
// import ProgressWarning from './components/ProgressWarning'

import logo from './logo.svg'
import './App.css'


export default class App extends React.Component {
	render() {
		return (
			<main className="container my-5">
				<div className="row">
					<div className="col-12">
						<img src={logo} width="300" className="App-logo" alt="logo" />
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<Card />
					</div>
					<div className="col-6">
						<Alert variant="success" message="A simple successful alert—check it out!" />
						<Alert variant="danger" message="A simple dangerous alert—check it out!" />
						<Alert variant="info">
							<h4>A simple informative alert!</h4>
							<h5>Check it out!</h5>
						</Alert>
						{/* <ProgressInfo />
						<br/>
						<ProgressWarning /> */}
						<br/>
						{/* <Progress value="75" /> */}
						<Progress value={75} />
						<br/>
						{/* <Progress value={39} variant="excited" isStriped isAnimated={false} /> */}
						<Progress value={39} variant="success" isStriped isAnimated={false} />
					</div>
				</div>
			</main>
		)
	}
}
