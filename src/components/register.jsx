import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RegisterForm from './registerform';

function Register() {

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordCheck, setPasswordCheck] = useState("");

	// on form submit click handler
	const handleSubmit = (event) =>{
		event.preventDefault();
		const newUser = {
			username,
			email,
			password,
			passwordCheck
		} 
		console.log(newUser);
	}
	let registerData = {
		handleSubmit,
		setUsername,
		setEmail,
		setPassword,
		setPasswordCheck
	}

	return (
		<div className="App pt-5">
			<Container>
				<Link to="/">Back to Home Page</Link>
			</Container>
			<Container>
				<Row className="justify-content-center">
					<Col md={6}>
						<h1 className="mb-3 text-center">Create Account</h1>
						<RegisterForm registerState = {registerData} />
						<p>Already have account?<Link to="/login">Login</Link></p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Register;