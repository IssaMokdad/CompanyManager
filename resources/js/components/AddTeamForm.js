import React from 'react';
import ModalButtonSubmit from './ModalButtonSubmit';
import Input from './Input';
import OptionsInput from './OptionsInput';
class AddTeamForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { teamInput: '', department_id:'', department:'' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeDepartment = this.handleChangeDepartment.bind(this);
        this.handleChangeTeamInput = this.handleChangeTeamInput.bind(this);
    }
    handleChangeDepartment(event) {
        this.setState({ department: event.value, department_id: event.id })
}
    handleChangeTeamInput(event) {

        this.setState({ teamInput: event })
    }
    handleSubmit(event) {
        event.preventDefault();
        let id = event.target.id
        let data = {
            'team_name': this.state.teamInput,
            'department_id':this.state.department_id
        }
        this.props.fetchRequest('addteam', 'POST', data).then(data => {
            if (data.success == 'success') {
                swal({
                    title: "Added Successfully!",
                    icon: "success",
                });
                this.setState({
                    teamInput: '',
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
                <form id='addteamform' onSubmit={this.handleSubmit}>
                    <OptionsInput nameDatabaseDescription='department_name' unitDescription='department' unitDescriptionPlural='departments' classes='md-form mb-3' handleChange={this.handleChangeDepartment} selected={this.state.department} unit={this.props.department} />
                    <Input type='text' placeholder='New team name' handleChange={this.handleChangeTeamInput} value={this.state.teamInput} />
                    <ModalButtonSubmit buttonTitle='Add Team' />
                </form>
        )
    }
}


export default AddTeamForm
