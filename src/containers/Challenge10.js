import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Pagination from 'react-bootstrap/Pagination'

import Card from '../components/Card'
import DataTable from '../components/DataTable'

import monkeySmall from '../assets/images/wildlife/monkey-small.png'


export default function Challenge10() {
	const CardHeader = () => (<><Monkey /> <strong>Thế giới hoang dã</strong></>)
	return (
		<Card
			header={CardHeader}
			bg="info"
		>
			<Row>
				<Col><SearchBox /></Col>
				<Col><PageSize /></Col>
			</Row>
			<DataTable headless striped bordered hover />
			<Paging className="justify-content-end" />
		</Card>
	)
}


const Monkey = () => <img src={monkeySmall} width="40" height="40" className="App-logo" alt="Monkey logo" />

function SearchBox() {
	return (
		<div className="d-flex align-items-center mb-3">
			<InputGroup>
				<InputGroup.Prepend>
					<InputGroup.Text>
						<Form.Label htmlFor="txtSearch" className="mb-0">Tìm</Form.Label>
					</InputGroup.Text>
				</InputGroup.Prepend>
				<Form.Control id="txtSearch"
					type="text"
					style={{ width: '80%', display: 'inline-block'}}
				/>
			</InputGroup>
		</div>
	)
}

function PageSize() {
	return (
		<div className="d-flex justify-content-end align-items-center mb-3">
			<Form.Label htmlFor="cbPageSize" className="mb-0">Hiển thị</Form.Label>
			<Form.Control id="cbPageSize"  as="select"
				className="ml-2"
				style={{ width: '80px', display: 'inline-block'}}
			>
				<option value={10}>10</option>
				<option value={25}>25</option>
				<option value={50}>50</option>
				<option value={100}>100</option>
			</Form.Control>
		</div>
	)
}

function Paging(props) {
	return (
		<Pagination {...props}>
			<Pagination.First />
			<Pagination.Prev />
			<Pagination.Item>{1}</Pagination.Item>
			<Pagination.Ellipsis />

			<Pagination.Item>{10}</Pagination.Item>
			<Pagination.Item>{11}</Pagination.Item>
			<Pagination.Item active>{12}</Pagination.Item>
			<Pagination.Item>{13}</Pagination.Item>
			<Pagination.Item disabled>{14}</Pagination.Item>

			<Pagination.Ellipsis />
			<Pagination.Item>{20}</Pagination.Item>
			<Pagination.Next />
			<Pagination.Last />
		</Pagination>
	)
}