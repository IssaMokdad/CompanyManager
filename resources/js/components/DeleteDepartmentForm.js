import React from 'react';
import OptionsInput from './OptionsInput';
import ModalButtonSubmit from './ModalButtonSubmit';
class DeleteDepartmentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { department: '', department_id: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeDepartment = this.handleChangeDepartment.bind(this);
    }
    handleChangeDepartment(event) {
        this.setState({ department: event.value, department_id: event.id })
    }

    handleSubmit(event) {
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
                        'id': this.state.department_id,
                    }
                    this.props.fetchRequest('deletedepartment', 'POST', data).then(data => {
                        if (data.success == 'success') {
                            swal({
                                title: "Deleted Successfully!",
                                icon: "success",
                            });
                            this.setState({
                                department: '', department_id: '',
                            })
                            this.props.initializeData()
                            document.getElementById(id).reset()
            
                        }
                        else {
                            swal({
                                title: "Something went wrong, try again!",
                            });
                        }
                    })

                } else {
                    swal("Your department is safe!");
                }
            });
    }

    render() {
        return (
            <form id='deletedepartmentform' onSubmit={this.handleSubmit}>
                <OptionsInput nameDatabaseDescription='department_name' unitDescription='department' unitDescriptionPlural='departments' classes='md-form mb-3' handleChange={this.handleChangeDepartment} selected={this.state.department} unit={this.props.department} />
                <ModalButtonSubmit buttonTitle='Delete Department' />
            </form>
        )
    }
}
export default DeleteDepartmentForm