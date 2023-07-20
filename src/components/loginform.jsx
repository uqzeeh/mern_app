
function LoginForm(props) {
    let{
        handleSubmit,
		setEmail,
		setPassword,
    } = props.loginState;

	return (
        <form method="POST" onSubmit={handleSubmit}>
            <div className="mb-3 form-group">
                <label className="d-block mb-2">Email</label>
                <div className="input-holder">
                    <input className="form-control" type="email" onChange = {e=>setEmail(e.target.value)} placeholder="john@example.com" />
                </div>
            </div>
            <div className="mb-3 form-group">
                <label className="d-block mb-2">Password</label>
                <div className="input-holder">
                    <input className="form-control" type="password" onChange = {e=>setPassword(e.target.value)} placeholder="john@example.com" />
                </div>
            </div>
            <div className="btn-holder">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    );
}

export default LoginForm;