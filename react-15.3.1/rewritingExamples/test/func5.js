// Extends React.Component
class Comment extends React.Component {
	// Render method now a class member rather than object property
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};
	},
	render(){
		return <h1>{this.props.name}</h1>;
	},
	// Validation
	Comment.propTypes = {
		counterProp: React.PropTypes.number.isRequired,
		incrementCounter: React.PropTypes.func.isRequired,
		decrementCounter: React.PropTypes.func.isRequired
	};
	// Defaults
	Comment.defaultProps = {
		name: 'Counter'
	};
}

function CommentDisplay(props) {
	return <div>
		<div>{props.counterProp}</div>
		<br />
		<button onClick={props.incrementCounter}>+</button>
		<button onClick={props.decrementCounter}>-</button>
		</div>
}

React.render(<Comment name={"Comment"}/>, document.getElementById('container'));