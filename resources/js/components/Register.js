import React, { Fragment } from 'react';
class Register extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props.errors.emailerror)
    }

    render() {
        let emailInput
        if (this.props.errors.emailerror != undefined) {
            emailInput = <div className="form-group">
                <label className="sr-only" htmlFor="email">Enter your email</label> <input type="email" name='email' className="form-control is-invalid" placeholder="Enter email" id="email" required />
                <span className="invalid-feedback" role="alert">
                    <strong>{this.props.errors.emailerror}</strong>
                </span></div>
        }
        else {
            emailInput = <div className="form-group">
                <label className="sr-only" htmlFor="email"></label> <input type="email" name='email' className="form-control" placeholder="Enter email" id="email" required />
            </div>
        }
        let passwordInput
        if (this.props.errors.passworderror != undefined) {
            passwordInput = <div className="form-group">
                <label className="sr-only" htmlFor="pwd">Password:</label> <input type="password" className="form-control is-invalid" name='password' placeholder="Enter password" id="pwd" required />
                <span className="invalid-feedback" role="alert">
                    <strong>{this.props.errors.passworderror}</strong>
                </span></div>
        }
        else {
            passwordInput = <div className="form-group">
                <label className="sr-only" htmlFor="pwd">Password:</label> <input type="password" className="form-control" name='password' placeholder="Enter password" id="pwd" required />
            </div>
        }
        return (
            <Fragment>
                <div className='col border border-primary ml-2 rounded mt-3' >
                    <form id='registerform' action="register" method='post' className="needs-validation" >

                        <div className="mt-3 row mb-3">

                            <div className="col-6">
                                <label className="sr-only" htmlFor="firstname">First name:</label>
                                <input type="text" className="form-control" name='first_name' placeholder="Enter firstname" id="firstname" required />
                            </div>
                            <div className="col-6">
                                <label className="sr-only" htmlFor="lastname">Last name:</label>
                                <input type="text" className="form-control " name='last_name' placeholder="Enter lastname" id="lastname" required />
                            </div>
                        </div>


                        {emailInput}

                        {passwordInput}

                        <div className="form-group">
                            <label className="sr-only" htmlFor="pwd">Password:</label>
                            <input type="password" className=" mb-3 form-control" name="password_confirmation" placeholder="Enter the same password" id="pwd1" required />
                        </div>
                        <input type="hidden" name="_token" value={document.getElementById('csrf-token').value} />
                        <button id='nons' type="submit" className="mb-3 btn btn-block btn-primary">Register</button>
                    </form>
                </div>
            </Fragment >
        )
    }
}


export default Register