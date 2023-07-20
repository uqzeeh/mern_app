import { Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className="home-page pt-5">
			<Container className="d-flex justify-content-center align-items-cente h-100 flex-column">
                <h1 className="mb-3 text-center">Welcome to Home Page</h1>
                <ul className="d-flex justify-content-center align-items-cente h-100 flex-wrap list-unstyled">
                    <li className="mx-2"><Link to="/login">Login</Link></li>
                    <li className="mx-2"><Link to="/register">Register</Link></li>
                </ul>
			</Container>
		</div>
	);
}

export default Home;