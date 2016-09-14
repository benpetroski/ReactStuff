var CounterDisplay = React.createClass({
	render() {
		return <div>{this.props.counterProp}</div>
	}
});

var Counter = React.createClass({
	getInitialState() {
		return {
			counter: 0
		};
	},
	render() {
		// Child component rendered
		// React will throw error if DOM doesn't
			// have a single parent
		return <div>
			<h3>{this.props.name}</h3>
			<CounterDisplay counterProp={this.state.counter}></CounterDisplay>
			</div>;
	}
});

ReactDOM.render(
	<Counter name={'Counter'} />,
	document.getElementById('container')
);