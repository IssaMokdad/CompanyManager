import React from 'react';
import OptionsInput from './OptionsInput';
import Input from './Input';
import ModalHeader from './ModalHeader';
import ModalButtonSubmit from './ModalButtonSubmit';
import Modal from './Modal';
class AddUserForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { image: '', department: '', teamGroup: '', role_type: '', team: '', password: '', password2: '', last_name: '', email: '', role_id: '', first_name: '', department_id: '', team_id: '' };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangePassword2 = this.handleChangePassword2.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeDepartment = this.handleChangeDepartment.bind(this);
        this.handleChangeRole = this.handleChangeRole.bind(this);
        this.handleChangeTeam = this.handleChangeTeam.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.fileInput = React.createRef();
    }
    handleChangeDepartment(event) {
        this.setState({ department: event.value, department_id: event.id }, function () {
            this.getTeams(this.state.department_id)
        });
    }

    getTeams(department_id) {
        this.props.fetchRequest('getteams?department_id=' + department_id + '', 'get').then(data => {
            this.setState({
                teamGroup: data
            })
        })
    }

    handleChangeRole(event) {

        this.setState({ role_type: event.value, role_id: event.id })
    }
    handleChangeTeam(event) {

        this.setState({ team: event.value, team_id: event.id })
    }
    handleChangeEmail(email) { this.setState({ email: email }) }
    handleChangePassword(password) { this.setState({ password: password }) }
    handleChangePassword2(password2) { this.setState({ password2: password2 }) }
    handleChangeFirstName(firstName) { this.setState({ first_name: firstName }) }
    handleChangeLastName(lastName) { this.setState({ last_name: lastName }) }


    handleSubmit(event) {
        event.preventDefault();
        let id=event.target.id
        if (this.state.password !== this.state.password2) {
            swal('Passwords don\'t match, try again')
            
        }
        else{
            let data = {
                'department_id': this.state.department_id,
                'email': this.state.email,
                'first_name': this.state.first_name,
                'last_name': this.state.last_name,
                'password': this.state.password,
                'team_id': this.state.team_id,
                'role_id': this.state.role_id,
            }
            this.props.fetchRequest('addusers','post', data).then(data => {
                    if (data.success == 'success') {
                        swal({
                            title: "Added Successfully!",
                            icon: "success",
                        });
                        this.setState({
                            image: '', password: '', password2: '', last_name: '', email: '', role_type: '', first_name: '', department: '', team: ''
                        })
    
                        // this.fileInput.current.value = null
                        document.getElementById(id).reset();
                        this.props.initializeData()
    
                    }
                    else {
                        swal({
                            title: "Something went wrong, try again!",
                            icon: "danger",
                        });
                    }
                })
        }
        
        // let formData = new FormData();
        // formData.append('image', this.fileInput.current.files[0]);
        // formData.append('department_id', this.state.department_id);
        // formData.append('email', this.state.email);
        // formData.append('first_name', this.state.first_name);
        // formData.append('last_name', this.state.last_name);
        // formData.append('password', this.state.password);
        // formData.append('team_id', this.state.team_id);
        // formData.append('role_id', this.state.role_id);
       
    }


    render() {
        return (
            <form method='post' onSubmit={this.handleSubmit} id='adduserform'>
                <Modal classes="modal-dialog modal-lg" id='userform' modalSubmitButton={<ModalButtonSubmit buttonTitle='Add a User' />} modalHeader={<ModalHeader title='Add User Form' />}  >
                    <div className='row'>
                        <div className='col'>
                            <Input type='text' label='First Name' value={this.state.first_name} handleChange={this.handleChangeFirstName} />
                            <Input type='text' label='Last Name' value={this.state.last_name} handleChange={this.handleChangeLastName} />
                            <Input type='text' label='Email' value={this.state.email} handleChange={this.handleChangeEmail} />
                            <Input type='password' label='Password' value={this.state.password} handleChange={this.handleChangePassword} />
                            <Input type='password' label='Repeat Password' value={this.state.password2} handleChange={this.handleChangePassword2} />
                        </div>
                        <div className='col'>
                            <OptionsInput nameDatabaseDescription='department_name' unitDescription='department' unitDescriptionPlural='departments' classes='md-form mb-3' handleChange={this.handleChangeDepartment} selected={this.state.department} unit={this.props.department} />
                            <OptionsInput nameDatabaseDescription='team_name' unitDescription='team' unitDescriptionPlural='teams' classes='md-form mb-3' handleChange={this.handleChangeTeam} selected={this.state.team} unit={this.state.teamGroup} />
                            <OptionsInput nameDatabaseDescription='role_type' unitDescription='role' unitDescriptionPlural='roles' classes='md-form mb-3' handleChange={this.handleChangeRole} selected={this.state.role_type} unit={this.props.role} />
                            {/* <label>Attach a photo</label><input ref={this.fileInput} type='file' /> */}
                        </div>
                    </div>
                </Modal>
            </form>
        )
    }
}


export default AddUserForm



















