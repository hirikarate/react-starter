const e = React.createElement

class HelloComponent extends React.Component {
	render() {
		const h3Style = { color: 'blue' }
		const h4Style = { 'text-align': 'right' }
		return (
			<div className='alert alert-success' role='alert'>
				<h3 style={h3Style}>Hello</h3>
				<h4 style={h4Style}>CodeSchool</h4>
			</div>
		)
	}
}

class ContainerComponent extends React.Component {
	render() {
		return e('div', { className: 'container' },
			e('div', { className: 'card' },
				e('div', { className: 'card-header' },
					'React Example - by CodeSchool.VN'
				),
				e('div', { className: 'card-body' },
					e(HelloComponent)
				),
			)
		)
	}
}

window.ContainerComponent = ContainerComponent