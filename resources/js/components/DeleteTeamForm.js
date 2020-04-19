import React from 'react';
import OptionsInput from './OptionsInput';
import ModalButtonSubmit from './ModalButtonSubmit';
import Input from './Input';
class DeleteTeamForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { department: '',teamGroup:'', department_id: '', team: '', team_id:''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getTeams = this.getTeams.bind(this);
        this.handleChangeDepartment = this.handleChangeDepartment.bind(this);
        this.handleChangeTeam = this.handleChangeTeam.bind(this);
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
    handleChangeTeam(event) {

        this.setState({ team: event.value, team_id: event.id })
    }
    handleSubmit(event) {
        event.preventDefault();
        let id = event.target.id

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
                        'team_id': this.state.team_id,
                        'department_id': this.state.department_id,
                    }
                    this.props.fetchRequest('deleteteam', 'POST', data).then(data => {
                        if (data.success == 'success') {
                            swal({
                                title: "Deleted Successfully!",
                                icon: "success",
                            });
                            this.setState({
                                department: '', department_id: '',team_id:'',team:'',teamGroup:''
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
                    swal("Your team is safe!");
                }
            });

        // this.props.fetchRequest('deleteteam', 'POST', data).then(data => {
        //     if (data.success == 'success') {
        //         swal({
        //             title: "Deleted Successfully!",
        //             icon: "success",
        //         });
        //         this.setState({
        //             department: '', department_id: '', team_id: '', team: '', teamGroup: ''
        //         })
        //         this.props.initializeData()
        //         document.getElementById(id).reset()

        //     }
        //     else {
        //         swal({
        //             title: "Something went wrong, try again!",
        //         });
        //     }
        // })
    }

    render() {
        return (
            <form id='deleteteamform' onSubmit={this.handleSubmit}>
                <OptionsInput nameDatabaseDescription='department_name' unitDescription='department' unitDescriptionPlural='departments' classes='md-form mb-3' handleChange={this.handleChangeDepartment} selected={this.state.department} unit={this.props.department} />
                <OptionsInput nameDatabaseDescription='team_name' unitDescription='team' unitDescriptionPlural='teams' classes='md-form mb-3' handleChange={this.handleChangeTeam} selected={this.state.team} unit={this.state.teamGroup} />
                <ModalButtonSubmit buttonTitle='Delete Team' />
            </form>
        )
    }
}


export default DeleteTeamForm
