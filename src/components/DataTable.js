import React from 'react'
import PropTypes from 'prop-types'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

import MediaObject from '../components/MediaObject'
import PopTooltip from '../components/PopTooltip'

import ant from '../assets/images/wildlife/ant.png'
import antSmall from '../assets/images/wildlife/ant-small.png'
import dragonfly from '../assets/images/wildlife/dragonfly.png'
import dragonflySmall from '../assets/images/wildlife/dragonfly-small.png'
import ladybird from '../assets/images/wildlife/ladybird.png'
import ladybirdSmall from '../assets/images/wildlife/ladybird-small.png'


export default function DataTable({headless = false, ...others}) {
	return (
		<Table {...others}>
			{ headless ||
			<thead>
				<tr>
				<th>Hình</th>
				<th>Tên</th>
				<th>Biết bay</th>
				<th>Tóm tắt</th>
				</tr>
			</thead>
			}
			<tbody>
				<tr>
					<td><img src={antSmall} width="32" alt="Kiến" /></td>
					<td>Kiến</td>
					<td><YesNoBadge /></td>
					<td>
						<PopTooltip
							placement="right"
							target={
								<Button variant="secondary" size="sm">
									Preview
								</Button>
							}
						>
							<MediaObject src={ant} alt="Kiến" size="100">
								<b>Kiến</b> (tên khoa học: <em>Formicidae</em>) là một họ côn trùng thuộc bộ Cánh màng.
								Các loài trong họ này có tính xã hội cao.
							</MediaObject>
						</PopTooltip>
					</td>
				</tr>
				<tr>
					<td><img src={ladybirdSmall} width="32" alt="Bọ rùa" /></td>
					<td>Bọ rùa</td>
					<td><YesNoBadge yes /></td>
					<td>
						<PopTooltip
							placement="right"
							target={
								<Button variant="secondary" size="sm">
									Preview
								</Button>
							}
						>
							<MediaObject src={ladybird} alt="Bọ rùa" size="100">
								<b>Bọ rùa</b> có hình thái đặc trưng là hình bán cầu trông giống như một con rùa tý hon.
							</MediaObject>
						</PopTooltip>
					</td>
				</tr>
				<tr>
					<td><img src={dragonflySmall} width="32" alt="Chuồn chuồn" /></td>
					<td>Chuồn chuồn</td>
					<td><YesNoBadge yes /></td>
					<td>
						<PopTooltip
							placement="right"
							target={
								<Button variant="secondary" size="sm">
									Preview
								</Button>
							}
						>
							<MediaObject src={dragonfly} alt="Chuồn chuồn" size="100">
								<b>Chuồn chuồn</b> có đầu tròn và khá lớn so với thân được bao phủ phần lớn bởi hai mắt kép lớn hai bên, các cặp chân có thể bắt mồi dễ dàng trong khi bay.
							</MediaObject>
						</PopTooltip>
					</td>
				</tr>
			</tbody>
		</Table>
	)
}

DataTable.propTypes = {
	headless: PropTypes.bool,
}

const YesNoBadge = ({yes}) => (
	<Badge variant={yes ? 'success' : 'warning'}>{yes ? 'Có' : 'Không'}</Badge>
)