var CounterDisplay = React.createClass({
    render() {
        // Calls the handler props once events are fired
        return <div>
            <div>{this.props.counterProp}</div>
            <br />
            <button onClick={this.props.incrementCounter}>+</button>
            <button onClick={this.props.decrementCounter}>-</button>
            </div>
    },
    // Setup validation for each props
    propTypes: {
        // Must be a num
        counterProp: React.PropTypes.number.isRequired,
        // Must be func
        incrementCounter: React.PropTypes.func.isRequired,
        decrementCounter: React.PropTypes.func.isRequired
    }
})

var Counter = React.createClass({
    getDefaultProps() {
        return {
            name: 'CountCount'
        };
    },
    getInitialState: function() {
    return {
        counter: 0
    };
  },
  handleIncrement(){
    // Update counter state
    this.setState({counter : this.state.counter+1});
  },
  handleDecrement(){
      // Update counter state
    this.setState({counter : this.state.counter-1});
  },
  render: function() {
    // Pass down handlers to CounterDisplay component
    return <div>
            <h2>{this.props.name}</h2>
            <CounterDisplay 
            counterProp={this.state.counter}
          incrementCounter={this.handleIncrement}
          decrementCounter={this.handleDecrement}></CounterDisplay>
      </div>;
  }
});

ReactDOM.render(
  <Counter />,
  document.getElementById('container')
);