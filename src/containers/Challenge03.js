import React from 'react'

import MediaObject from '../components/MediaObject'
import monkey from '../assets/images/wildlife/monkey.png'


export default function Challenge03() {
	return (
		<MediaObject src={monkey} alt="Monkey" size="150">
			<h5>Con khỉ</h5>
			Cùng họ hàng với Tôn Ngộ Không và Son Go-ku. <br/>
			Có khoảng 264 loài khỉ đã bị tuyệt chủng.
			Một số loài giống khỉ không đuôi, như tinh tinh hay vượn thường
			được gọi là khỉ trong ngữ cảnh bình dân, tuy rằng các nhà sinh học
			không xếp chúng vào các loài khỉ.
		</MediaObject>
	)
}
