import React, { Fragment } from 'react';
import EditUserForm from './EditUserForm'
import ImageForm from './ImageForm'
import Paginator from './Paginator'
class RenderTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id:'', department_name: '',last_name: '', first_name: '', departmentId: '', email: '', team: '',teamId: '',role_type: '',role_id: '',
            activePage: '',
        }
        this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this)
        this.onClick = this.onClick.bind(this)
        this.onClickReceipt = this.onClickReceipt.bind(this)
        this.handlePageChange = this.handlePageChange.bind(this)
    }
    onClickReceipt(event) {
        event.preventDefault()
        let imagePath = event.target.getAttribute('data-imagepath')
        imagePath = 'uploads/' + imagePath
        this.setState({
            imagePath: imagePath
        })
    }

    onClick(event) {
        event.preventDefault()
        let email = event.target.getAttribute("data-email")
        let department = event.target.getAttribute("data-department")
        let first_name = event.target.getAttribute("data-first_name")
        let last_name = event.target.getAttribute("data-last_name")
        let department_id = event.target.getAttribute("data-department_id")
        let user_id = event.target.getAttribute("data-id")
        let team = event.target.getAttribute("data-team_name")
        let team_id = event.target.getAttribute("data-team_id")
        let role_id = event.target.getAttribute("data-role_id")
        let role_type = event.target.getAttribute("data-role_type")
        this.setState({
            department_name: department,
            departmentId : department_id,
            user_id : user_id,
            first_name: first_name,
            email: email,
            last_name: last_name,
            team: team,
            teamId: team_id,
            role_id: role_id,
            role_type: role_type,
        })
    }
    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({
                activePage: this.props.currentPage
            })
        }
    }
    handlePageChange(page) {
        let pageNumber = page
        this.setState({activePage: pageNumber}, function () {
            this.props.getUsers(this.state.activePage)
        });
        
    }
    handleDeleteSubmit(event) {
        let id = event.target.id
        event.preventDefault();
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this expense!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    let data = {
                        'id': id,
                    }
                    this.props.fetchRequest('deleteuser', 'POST', data).then(data => {
                        if (data.success == 'success') {
                            swal({
                                title: "Deleted Successfully!",
                                icon: "success",
                            });
                            this.props.initializeData()

                        }
                        else {
                            swal({
                                title: "Something went wrong, try again!",
                            });
                        }
                    })

                } else {
                    swal("Your expense is safe!");
                }
            });
    }

    render() {
        console.log(this.state.departmentId)  
        let data
        if (this.props.users !== undefined) {
            data = Array.from(this.props.users).map(data =>
                <tr key={data.id}><td>{data.first_name}</td>
                    <td >{data.last_name}</td>
                    <td>{data.email}</td>
                    <td>{data.department_name}</td>
                    <td>{data.team_name}</td>
                    <td>{data.role_type}</td>
                    <td>
                        <div className='row'>
                            <div className='col-2'>
                                <form className='form' id={data.id} onSubmit={this.handleDeleteSubmit}><button type='submit' className='btn btn-sm btn-danger' >
                                    <i className='fas fa-trash'></i>
                                </button>
                                </form>
                            </div>
                            <div className='ml-1 col-2 mr-1'>
                                <form data-first_name={data.first_name} data-last_name={data.last_name} data-department_id={data.department_id} data-id={data.id} data-email={data.email} data-role_type={data.role_type} data-role_id={data.role_id} data-department={data.department_name} data-team_id={data.team_id} data-team_name={data.team_name} onSubmit={this.onClick}>
                                    <button type='submit' className='btn btn-sm btn-primary' data-target='#edituserform' data-toggle="modal">
                                        <i className='fa fa-pen-square'>
                                        </i>
                                    </button>
                                </form>
                            </div>
                            <div className='col-2'>
                                <form onSubmit={this.onClickReceipt} data-imagepath={data.image}>
                                    <button type='submit' className='btn btn-sm btn-primary' data-target='#showimage' data-toggle="modal">
                                        <i className="fas fa-receipt">
                                        </i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </td>
                </tr >)
        }
        return (
            <Fragment>
                <table className="table table-bordered table-hover">
                    <thead >
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Team</th>
                            <th>Position</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data}
                    </tbody>
                </table>       
                    <Paginator handlePageChange={this.handlePageChange} last_page={this.props.last_page} total={this.props.total} activePage={this.state.activePage}/>
            </Fragment>
        )
    }
}


export default RenderTable
