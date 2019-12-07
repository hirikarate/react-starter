import React from 'react'
import Form from 'react-bootstrap/Form'

import FormTextField from '../components/FormTextField'


export default function Challenge05() {
	return (
		<Form>
			<FormTextField id="txtUsername" label="Tên đăng nhập" type="text" />
			<FormTextField id="txtPassword" label="Mật khẩu" type="password" />
		</Form>
	)
}
