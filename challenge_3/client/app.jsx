class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: ' ',
			email: ' ',
			password: ' ',
			line1: '',
			city: '',
			state: ''
		};
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit(e) {
		const form = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			line1: this.state.line1,
			city: this.state.city,
			state: this.state.state,
			creditCard: this.state.creditCard,
			expireDate: this.state.expireDate,
			cvv: this.state.cvv,
			billingZip: this.state.billingZip
		}
		// console.log(form);
		$.ajax({
			url: '/user',
			method: 'POST',
			data: form,
			success: () => {
				console.log('sent');
			}
		})
	}
	onForm1(e) {
		e.preventDefault();
		const form1 = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password
		}
		console.log(form1);
		loadF2();
	}
	onForm2(e) {
		e.preventDefault();
		const form2 = {
			line1: this.state.line1,
			city: this.state.city,
			state: this.state.state
		}
		console.log(form2);
		loadF3();
	}
	onForm3(e) {
		e.preventDefault();
		const form3 = {
			creditCard: this.state.creditCard,
			expireDate: this.state.expireDate,
			cvv: this.state.cvv,
			billingZip: this.state.billingZip
		}
		console.log(form3);
		this.onSubmit(form3);
	}

	render() {
		return (
			<div>
				<input id="fButton" type="button" value="Go To Form1" name="submit" onClick={loadF1}></input>
				<div id="form1" hidden>
					<h3> personal info </h3>
					<form>
						<label>
							Name: <input name='name' value={this.state.name} onChange={e => this.handleChange(e)} />
						</label>
						<br /><br />
						<label>
							Email: <input name='email' value={this.state.email} onChange={e => this.handleChange(e)} />
						</label>
						<br /><br />
						<label>
							Password: <input type="password" name='password' value={this.state.password} onChange={e => this.handleChange(e)} />
						</label>
						<br /><br />
						<button onClick={(e) => this.onForm1(e)}>next</button>
					</form>
				</div>

				{/* //////////////////////////////////////////////////////////////// */}

				<div id="form2" hidden>
					<h3> Address Info </h3>
					<form>
						<label>
							Line1: <input name='line1' value={this.state.line1} onChange={e => this.handleChange(e)} />
						</label>
						<br /><br />
						<label>
							City: <input name='city' value={this.state.city} onChange={e => this.handleChange(e)} />
						</label>
						<br /><br />
						<label>
							State: <input name='state' value={this.state.state} onChange={e => this.handleChange(e)} />
						</label>
						<br /><br />
						<button onClick={(e) => this.onForm2(e)}>next</button>
					</form>
				</div>


				{/* //////////////////////////////////////////////////////////////// */}

				<div id="form3" hidden>
					<h3> Card Info </h3>
					<form>
						<label>
							Credit card: <input type="password" name='CreditCard' value={this.state.creditCard} onChange={e => this.handleChange(e)} />
						</label>
						<br /><br />
						<label>
							expireDate: <input type="date" name='expireDate' value={this.state.expireDate} onChange={e => this.handleChange(e)} />
						</label>
						<br /><br />
						<label>
							cvv: <input name='cvv' value={this.state.cvv} onChange={e => this.handleChange(e)} />
						</label>
						<br /><br />
						<label>
							billingZip: <input type="number" name='billingZip' value={this.state.billingZip} onChange={e => this.handleChange(e)} />
						</label>
						<br /><br />
						<button onClick={(e) => this.onForm3(e)}>submit</button>
					</form>
				</div>
			</div>
		)
	}
};

function loadF1() {
	$('#fButton').hide();
	$('#form1').show();
}

function loadF2() {
	$('#form1').hide();
	$('#form2').show();
}

function loadF3() {
	$('#form2').hide();
	$('#form3').show();
}


ReactDOM.render(<App />, document.getElementById('reactDiv'));