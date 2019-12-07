import React from 'react'
import Form from 'react-bootstrap/Form'

import Card from '../components/Card'
import FormTextField from '../components/FormTextField'


export default function Challenge07() {
	return (
		<Card
			header={() => (<h5>Kiểm duyệt form</h5>)}
			bg="warning"
		>
			<Form>
				<FormTextField id="txtEmail" label={ <><strong>Email</strong> <em>(tối đa 10 ký tự)</em></> }
					type="email" placeholder="Vd: codeschool@gmail.com"
					isValid
				/>
				<FormTextField id="txtAddress" label={<strong>Địa chỉ</strong>} 
					type="text"
					isValid={false} error="Thông tin này là bắt buộc"
				/>
				<FormTextField id="txtCompany" label={<strong>Công ty</strong>} 
					type="text"
				/>
			</Form>
		</Card>
	)
}
