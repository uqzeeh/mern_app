import React from 'react';;

function RegisterForm(props) {

    let{
        handleSubmit,
		setUsername,
		setEmail,
		setPassword,
		setPasswordCheck
    } = props.registerState;

	return (
        <form method="POST" autocomplete="off" onSubmit={handleSubmit}>
            <div className="mb-3 form-group">
                <label className="d-block mb-2">User Name</label>
                <div className="input-holder">
                    <input className="form-control" type="text" onChange = {e=>setUsername(e.target.value)} placeholder="john@example.com" />
                </div>
            </div>
            <div className="mb-3 form-group">
                <label className="d-block mb-2">Email</label>
                <div className="input-holder">
                    <input className="form-control" type="email" onChange = {e=>setEmail(e.target.value)} placeholder="john@example.com" autocomplete="off" />
                </div>
            </div>
            <div className="mb-3 form-group">
                <label className="d-block mb-2">Password</label>
                <div className="input-holder">
                    <input className="form-control" type="password" onChange = {e=>setPassword(e.target.value)} placeholder="john@example.com" />
                </div>
            </div>
            <div className="mb-3 form-group">
                <label className="d-block mb-2">Confirm Password</label>
                <div className="input-holder">
                    <input className="form-control" type="password" onChange = {e=>setPasswordCheck(e.target.value)} placeholder="john@example.com" />
                </div>
            </div>
            <div className="btn-holder">
                <button type="submit" className="btn btn-primary">Create account</button>
            </div>
        </form>
    );
}

export default RegisterForm;