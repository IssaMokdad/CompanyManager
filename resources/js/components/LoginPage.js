import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel';
import Login from './Login';
import Register from './Register';
import {Fragment} from 'react';


class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <Fragment>
            <Carousel />
            <div className='container'>
                <div className='row'>
                    <Login />
                    <Register errors={this.props}/>
                </div>
            </div>

            </Fragment>);
    }
}

export default LoginPage;

if (document.getElementById('loginPage')) {
    const el = document.getElementById('main')
    const props = Object.assign({}, el.dataset)
    ReactDOM.render(<LoginPage {...props} />, document.getElementById('loginPage'));
}
