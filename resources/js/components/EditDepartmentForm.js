import React from 'react';
import OptionsInput from './OptionsInput';
import ModalButtonSubmit from './ModalButtonSubmit';
import Input from './Input';
class EditDepartmentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { department: '', department_id: '', department_input: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeDepartmentInput = this.handleChangeDepartmentInput.bind(this);
        this.handleChangeDepartment = this.handleChangeDepartment.bind(this);
    }
    handleChangeDepartment(event) {
            this.setState({ department: event.value, department_id: event.id })
    }
    handleChangeDepartmentInput(event) {

        this.setState({ department_input: event })
    }
    handleSubmit(event) {
        event.preventDefault();
        let id = event.target.id
        let data = {
            'department_name': this.state.department_input,
            'department_id': this.state.department_id,
        }
        this.props.fetchRequest('editdepartment', 'POST', data).then(data => {
            if (data.success == 'success') {
                swal({
                    title: "Edited Successfully!",
                    icon: "success",
                });
                this.setState({
                    department: '', department_id: '', department_input: ''
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
                <form id='editdepartmentform' onSubmit={this.handleSubmit}>
                    <OptionsInput nameDatabaseDescription='department_name' unitDescription='department' unitDescriptionPlural='departments' classes='md-form mb-3' handleChange={this.handleChangeDepartment} selected={this.state.department} unit={this.props.department} />
                    <Input type='text' placeholder='New department name' handleChange={this.handleChangeDepartmentInput} value={this.state.department_input} />
                    <ModalButtonSubmit buttonTitle='Edit Department' />
                </form>
        )
    }
}


export default EditDepartmentForm
