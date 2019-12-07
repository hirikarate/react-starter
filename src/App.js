
class App extends React.Component {
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

window.App = App