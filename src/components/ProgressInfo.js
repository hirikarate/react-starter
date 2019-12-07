
const PROG_STYLE = { width: '50%' }

const ProgressInfo = () => (
	<div class="progress">
		<div
			style={PROG_STYLE} ariaValuenow="50" ariaValuemin="0" ariaValuemax="100"
			className="progress-bar bg-info" role="progressbar"
		>
		</div>
	</div>
)

window.ProgressInfo = ProgressInfo