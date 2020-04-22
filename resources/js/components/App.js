import React from 'react';
import ReactDOM from 'react-dom';
import Logout from './Logout';
import NavBar from './NavBar';
import Chart from './Chart';
import AddUserForm from './AddUserForm';
import DepartmentBoard from './DepartmentBoard';
import TeamBoard from './TeamBoard';
import FormsPopUpButtons from './FormsPopUpButtons';
import RenderTable from './RenderTable';
import { Fragment } from 'react';
import DatePicker from './DatePicker';
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            department: '',
            role:'',
            usersGroupedByDepartment: '',
            users: '',
            first_name:'',
            last_name:'',
            role_type:''
        }
        this.fetchRequest = this.fetchRequest.bind(this)
        this.handleChangeExpensesGroupedByCategory=this.handleChangeExpensesGroupedByCategory.bind(this)
        this.initializeData = this.initializeData.bind(this)
        this.getDepartments = this.getDepartments.bind(this)
        this.getUsers = this.getUsers.bind(this)
        this.getUserData = this.getUserData.bind(this)
        this.getRoles = this.getRoles.bind(this)
        this.getExpensesGroupedByCategory = this.getExpensesGroupedByCategory.bind(this)
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
    getDepartments() {
        this.fetchRequest('getdepartments', 'get').then(data => {
            this.setState({
                department: data
            })
        })
    }
    getUsers(page=1) {
        this.fetchRequest('getusers?page='+page+'', 'get').then(data => {
            this.setState({
                users: data
            })
        })
    }

    getRoles(){
        this.fetchRequest('getroles', 'get').then(data => {
            this.setState({
                role: data
            })
        })
    }

    handleChangeExpensesGroupedByCategory(data){
        this.setState({
            expensesGroupedByCategory : data
        })
    }
    getExpensesGroupedByCategory(data) {
        this.fetchRequest('getExpensesGroupedByCategory', 'get').then(data => {
            this.setState({
                expensesGroupedByCategory: data
            })
        })
    }
    initializeData() {
        this.getExpensesGroupedByCategory()
        this.getDepartments()
        this.getUsers()
        this.getRoles()
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
        console.log(this.state.first_name)
        return (
            <Fragment>
                <NavBar role_type={this.state.role_type} first_name={this.state.first_name} last_name={this.state.last_name} >
                    <Logout />
                </NavBar>
                <AddUserForm  initializeData={this.initializeData} fetchRequest={this.fetchRequest} role={this.state.role} department={this.state.department} />
                <DepartmentBoard initializeData={this.initializeData} fetchRequest={this.fetchRequest} role={this.state.role} department={this.state.department} />
                <TeamBoard initializeData={this.initializeData} fetchRequest={this.fetchRequest} department={this.state.department} />
                <FormsPopUpButtons />
                <div className='container'>
                    <div className='row'>
                        <div className='table-responsive col-md-12'>
                            <RenderTable per_page={this.state.users.per_page} last_page={this.state.users.last_page} total={this.state.users.total} currentPage={this.state.users.current_page} getUsers={this.getUsers} initializeData={this.initializeData} fetchRequest={this.fetchRequest} role={this.state.role} team={this.state.team} department={this.state.department} users={this.state.users.data} />
                        </div>
                        {/* <div className='col-md-5'>
                            <DatePicker handleChangeExpensesGroupedByCategory={this.handleChangeExpensesGroupedByCategory} fetchRequest={this.fetchRequest} />
                            <Chart expensesGroupedByCategory={this.state.expensesGroupedByCategory} />
                        </div> */}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default App;

if (document.getElementById('CompanyManager')) {
    ReactDOM.render(<App />, document.getElementById('CompanyManager'));
}
