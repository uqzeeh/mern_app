import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginForm from './loginform';

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event) =>{
		event.preventDefault();
		const userCredentials = {
			email,
			password
		}
		console.log(userCredentials);
	}
	let loginUser = {
		handleSubmit,
		setEmail,
		setPassword
	}
	return (
		<div className="App pt-5">
			<Container>
				<Link to="/">Back to Home Page</Link>
			</Container>
			<Container>
				<Row className="justify-content-center">
					<Col md={6}>
						<h1 className="mb-3 text-center">Sign In</h1>
						<LoginForm loginState = {{handleSubmit, setEmail, setPassword}} />
						<p>Don't have account? <Link to="/register">Register</Link> Yourself</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Login;