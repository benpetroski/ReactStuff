var Fib = React.createClass({
	CalcFib(itr) {
		this.a = 1;
		this.b = 1;
		this.aOld = 1;
		this.bOld = 1;
		for (var num = 0; num < itr; num++) {
			this.aOld = this.a;
			this.bOld = this.b;
			this.b = this.aOld + this.bOld;
			this.a = this.bOld;
			console.log(this.b);
		}
	},
	render() {
		this.CalcFib(50);
		return <div>Fib</div>;
	}
});

ReactDOM.render(
	<Fib />,
	document.getElementById('container')
);