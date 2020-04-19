import React from 'react';
import OptionsInput from './OptionsInput';
import ModalButtonSubmit from './ModalButtonSubmit';
import Input from './Input';
class EditTeamForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { department: '', department_id: '', team: '', teamGroup: '' ,  team_id: '', team_input:''   };
        this.getTeams = this.getTeams.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeTeam = this.handleChangeTeam.bind(this);
        this.handleChangeTeamInput = this.handleChangeTeamInput.bind(this);
        this.handleChangeDepartment = this.handleChangeDepartment.bind(this);
    }
    handleChangeTeam(event) {

        this.setState({ team: event.value, team_id: event.id })
    }

    handleChangeTeamInput(event) {

        this.setState({ team_input: event })
    }

    getTeams(department_id) {
        this.props.fetchRequest('getteams?department_id=' + department_id + '', 'get').then(data => {
            this.setState({
                teamGroup: data
            })
        })
    }
    handleChangeDepartment(event) {
        this.setState({ department: event.value, department_id: event.id }, function () {
            this.getTeams(this.state.department_id)
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        let id = event.target.id
        let data = {
            'team_name': this.state.team_input,
            'department_id': this.state.department_id,
            'id'      :this.state.team_id
        }
        this.props.fetchRequest('editteam', 'POST', data).then(data => {
            if (data.success == 'success') {
                swal({
                    title: "Edited Successfully!",
                    icon: "success",
                });
                this.setState({
                    department: '',teamGroup:'',team_input:'', department_id: '', department_input: '', team_id:'',team:''
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
                <form id='editteamform' onSubmit={this.handleSubmit}>
                    <OptionsInput nameDatabaseDescription='department_name' unitDescription='department' unitDescriptionPlural='departments' classes='md-form mb-3' handleChange={this.handleChangeDepartment} selected={this.state.department} unit={this.props.department} />
                    <OptionsInput nameDatabaseDescription='team_name' unitDescription='team' unitDescriptionPlural='teams' classes='md-form mb-3' handleChange={this.handleChangeTeam} selected={this.state.team} unit={this.state.teamGroup} />
                    <Input type='text' placeholder='New team name' handleChange={this.handleChangeTeamInput} value={this.state.team_input} />
                    <ModalButtonSubmit buttonTitle='Edit Team' />
                </form>
        )
    }
}


export default EditTeamForm
