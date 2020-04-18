import React from 'react';
class Login extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
        <div className='col border border-primary ml-2 rounded mt-3' >
            <form id="loginform" method='post' action='login' className="needs-validation">
                <input type="hidden" name="_token" value={document.getElementById('csrf-token').value} />
                <div className="form-group mt-3">
                    <label className="sr-only" htmlFor="email">Email address:</label>
                    <input type="email" name='email' className="form-control" placeholder="Enter email" required />
                </div>
                <div className="form-group">
                    <label className="sr-only" htmlFor="pwd">Password:</label>
                    <input type="password" name='password' placeholder="Enter your password" className="form-control" required />
                </div>


                <div className="form-group row">
                    <div className="col-md-6 offset-md-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="remember" id="remember" />

                            <label className="form-check-label" htmlFor="remember">
                                Remember Me
                                    </label>
                        </div>
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <div className="col-12 ml-5">
                        <button style={{ width: '50%' }} type="submit" className="btn btn-primary">Login</button>

                        <a className=" btn btn-link" href="#">
                            Forgot Your Password?
                        </a>
                    </div>
                </div>
            </form>
        </div >)
    }
}


export default Login