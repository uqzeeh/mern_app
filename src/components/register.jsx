import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Register() {
	return (
		<div className="App pt-5">
			<Container>
				<Row className="justify-content-center">
					<Col md={6}>
						<h1 className="mb-3 text-center">Create Account</h1>
						<form method="POST">
							<div className="mb-3 form-group">
								<label className="d-block mb-2">User Name</label>
								<div className="input-holder">
									<input className="form-control" type="text" placeholder="john@example.com" />
								</div>
							</div>
							<div className="mb-3 form-group">
								<label className="d-block mb-2">Email</label>
								<div className="input-holder">
									<input className="form-control" type="email" placeholder="john@example.com" />
								</div>
							</div>
							<div className="mb-3 form-group">
								<label className="d-block mb-2">Password</label>
								<div className="input-holder">
									<input className="form-control" type="password" placeholder="john@example.com" />
								</div>
							</div>
							<div className="mb-3 form-group">
								<label className="d-block mb-2">Confirm Password</label>
								<div className="input-holder">
									<input className="form-control" type="password" placeholder="john@example.com" />
								</div>
							</div>
							<div className="btn-holder">
								<button type="submit" className="btn btn-primary">Create account</button>
							</div>
						</form>
						<p>Already have account?<Link to="/login">Login</Link></p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Register;