
const PROG_STYLE = { width: '50%' }

const ProgressInfo = () => (
	<div className="progress">
		<div
			style={PROG_STYLE} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
			className="progress-bar bg-info" role="progressbar"
		>
		</div>
	</div>
)

window.ProgressInfo = ProgressInfo