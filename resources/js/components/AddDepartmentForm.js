import React from 'react';
import ModalButtonSubmit from './ModalButtonSubmit';
import Input from './Input';
class AddDepartmentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { departmentInput: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeDepartmentInput = this.handleChangeDepartmentInput.bind(this);
    }

    handleChangeDepartmentInput(event) {

        this.setState({ departmentInput: event })
    }
    handleSubmit(event) {
        event.preventDefault();
        let id = event.target.id
        let data = {
            'department_name': this.state.departmentInput,
        }
        this.props.fetchRequest('adddepartment', 'POST', data).then(data => {
            if (data.success == 'success') {
                swal({
                    title: "Added Successfully!",
                    icon: "success",
                });
                this.setState({
                    departmentInput: '',
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
    }

    render() {
        return (
                <form id='adddepartmentform' onSubmit={this.handleSubmit}>
                    <Input type='text' placeholder='New department name' handleChange={this.handleChangeDepartmentInput} value={this.state.departmentInput} />
                    <ModalButtonSubmit buttonTitle='Add Department' />
                </form>
        )
    }
}


export default AddDepartmentForm
