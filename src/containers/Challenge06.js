import React from 'react'
import Form from 'react-bootstrap/Form'

import Card from '../components/Card'
import FormTextField from '../components/FormTextField'


export default function Challenge06() {
	return (
		<Card
			header={() => (<h5>Đăng ký thành viên</h5>)}
			text="white"
		>
			<Form>
				<FormTextField id="txtName" label="Tên (tối đa 10 ký tự)"
					type="text" placeholder="Vd: Coder"
					maxLength={10}
				/>
				<FormTextField id="txtDOB" label="Ngày sinh"
					type="date"
				/>
			</Form>
		</Card>
	)
}
