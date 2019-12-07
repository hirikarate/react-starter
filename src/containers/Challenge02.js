import React from 'react'

import Card from '../components/Card'
import logo from '../assets/images/logo.svg'


export default function Challenge02() {
	const CardHeader = () => (<><Logo /><strong style={{color: 'lime'}}>Component Header</strong></>)

	return (
		<React.Fragment>
			<Card
				header={CardHeader}
				title="Primary card title"
				bg="dark" text="white"
			>
				Some quick example text to build on the card title and make up the bulk of the card's content.
			</Card>
			<br/>

			<Card
				title={<em>Italic Title</em>}
			>
				Some quick example text to build on the card title and make up the bulk of the card's content.
			</Card>
		</React.Fragment>
	)
}


const Logo = () => <img src={logo} width="30" height="30" className="App-logo" alt="logo" />
