import React from 'react';
import ReactDOM from 'react-dom';
import Logout from './Logout';
import NavBar from './NavBar';
import Chart from './Chart';
import AddUserForm from './AddUserForm';
import FormPopUpButton from './FormPopUpButton';
import RenderTableTeam from './RenderTableTeam';
import { Fragment } from 'react';
import DatePicker from './DatePicker';

class AppTeam extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            department: '',
            users: '',
            first_name:'',
            last_name:'',
            role_type:''
        }
        this.fetchRequest = this.fetchRequest.bind(this)
        this.initializeData = this.initializeData.bind(this)
        this.getUsers = this.getUsers.bind(this)
        this.getUserData = this.getUserData.bind(this)
    }
    getUserData(){
        this.fetchRequest('getuserdata', 'get').then(data => {
            let first_name = data[0].first_name
            let last_name = data[0].last_name
            let role_type = data[0].role_type
            this.setState({
                first_name: first_name,
                last_name: last_name,
                role_type:role_type,
            })
        })
    }

    getUsers(page=1) {
        this.fetchRequest('getusersdepartment?page='+page+'', 'get').then(data => {
            this.setState({
                users: data
            })
        })
    }

    initializeData() {
        this.getUsers()
        this.getUserData()  
    }

    fetchRequest(url, method, data = null) {
        if (method === 'get') {
            return fetch(url).then(response => response.json())
        }
        else {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                body: JSON.stringify(data)
            }).then(response => response.json())
        }
    }
    componentDidMount() {
        this.initializeData()
    }

    render() {
        return (
            <Fragment>
                <NavBar role_type={this.state.role_type} first_name={this.state.first_name} last_name={this.state.last_name} >
                    <Logout />
                </NavBar>
                <div className='container'>
                    <div className='row'>
                        <div className='table-responsive col-md-12'>
                            <RenderTableTeam getUsers={this.getUsers} per_page={this.state.users.per_page} last_page={this.state.users.last_page} total={this.state.users.total} currentPage={this.state.users.current_page} initializeData={this.initializeData} fetchRequest={this.fetchRequest} users={this.state.users.data} />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default AppTeam;

if (document.getElementById('TeamManager')) {
    ReactDOM.render(<AppTeam />, document.getElementById('TeamManager'));
}
