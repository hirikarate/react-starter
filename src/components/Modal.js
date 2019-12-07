import React from 'react'
import PropTypes from 'prop-types'
import BsModal from 'react-bootstrap/Modal'


export default function Modal(props) {
	const { header, footer: Footer, children } = props
	return (
		<BsModal.Dialog>
			{ header &&
			<BsModal.Header closeButton>
				{header}
			</BsModal.Header>
			}

			<BsModal.Body>
				{children}
			</BsModal.Body>

			{ Footer &&
			<BsModal.Footer>
				<Footer />
			</BsModal.Footer>
			}
		</BsModal.Dialog>
	)
}

Modal.propTypes = {
	header: PropTypes.element,
	footer: PropTypes.elementType,
}