import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/Login';
import Register from './components/register';
import Dashboard from './components/dashboard';


function App() {
return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/dashboard" element={<Dashboard />} />
		</Routes>
	</BrowserRouter>
);
}

export default App;
