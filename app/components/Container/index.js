
export class Container extends React.Component {
	render: function() {
		const style = {
			width: '100vw',
			height: '100vh'
		}
		return (
			<div style={style}>
				<Map google={this.props.google}
				/>
			</div>
		)
	}
}

export default GoogleApiComponent({
	apiKey: __GAPI_KEY__
})(Container)