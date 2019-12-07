import React from 'react'

import AlertDanger from './components/AlertDanger'
import AlertSuccess from './components/AlertSuccess'
import Card from './components/Card'
import ProgressInfo from './components/ProgressInfo'
import ProgressWarning from './components/ProgressWarning'


export default class App extends React.Component {
	render() {
		return (
			<main className="container mt-5">
				<div className="row">
					<div className="col-6">
						<Card />
					</div>
					<div className="col-6">
						<AlertSuccess />
						<AlertDanger />
						<ProgressInfo />
						<br/>
						<ProgressWarning />
					</div>
				</div>
			</main>
		)
	}
}
