import React, { Fragment } from 'react';
import Paginator from './Paginator'
import ImageForm from './ImageForm'
import AddTaskForm from './AddTaskForm'
class RenderTableTeam extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id: '', last_name: '', first_name: '', email: '',
            activePage: '',tasks:''
        }
        this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this)
        this.onClick = this.onClick.bind(this)
        this.getTasks = this.getTasks.bind(this)
        this.onClickTasks = this.onClickTasks.bind(this)
        this.handlePageChange = this.handlePageChange.bind(this)
    }

    onClick(event) {
        event.preventDefault()
        let user_id = event.target.getAttribute("data-user_id")
        this.setState({
            user_id: user_id,
        })
    }
    getTasks(user_id) {
        this.props.fetchRequest('gettasks?user_id=' + user_id + '', 'get').then(data => {
            this.setState({
                tasks: Array.from(data)
            })
        })
    }
    onClickTasks(event) {
        event.preventDefault()
        let user_id = event.target.getAttribute("data-user_id")
        this.getTasks(user_id)
        this.setState({
            tasks: tasks,
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
        this.setState({ activePage: pageNumber }, function () {
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
        let data
        if (this.props.users !== undefined) {
            data = Array.from(this.props.users).map(data =>
                <tr key={data.id}><td>{data.first_name}</td>
                    <td >{data.last_name}</td>
                    <td >{data.email}</td>
                    <td>
                        <div className='row'>
                            <div className=' col '>
                                <form data-first_name={data.first_name} data-last_name={data.last_name} data-user_id={data.id} data-email={data.email} onSubmit={this.onClick}>
                                    <button type='submit' className='ml-5 btn btn-primary' data-target='#addtaskform' data-toggle="modal">
                                        <i className="fas fa-plus">
                                        </i>
                                    </button>
                                </form>
                            </div>
                            <div className='col'>
                                <form onSubmit={this.onClickTasks} data-user_id={data.id}>
                                    <button type='submit' className='btn btn-primary' data-target='#showimage' data-toggle="modal">
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data}
                    </tbody>
                </table>
                <Paginator handlePageChange={this.handlePageChange} last_page={this.props.last_page} total={this.props.total} activePage={this.state.activePage} />
                <AddTaskForm last_name={this.state.last_name} first_name={this.state.first_name} user_id={this.state.user_id} email={this.state.email} initializeData={this.props.initializeData} fetchRequest={this.props.fetchRequest} />
                <ImageForm tasks={this.state.tasks}/>
            </Fragment>
        )
    }
}


export default RenderTableTeam
