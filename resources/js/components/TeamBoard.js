import React from 'react';
import ModalHeader from './ModalHeader';
import ModalButtonSubmit from './ModalButtonSubmit';
import Modal from './Modal';
// import EditTeamForm from './EditTeamForm';
// import DeleteTeamForm from './DeleteTeamForm';
import AddTeamForm from './AddTeamForm';
class TeamBoard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Modal classes="modal-dialog modal-lg" id='teamform' modalHeader={<ModalHeader title='Team Form' />}>
                <AddTeamForm department={this.props.department} initializeData={this.props.initializeData} fetchRequest={this.props.fetchRequest}/>
               {/* <EditTeamForm team={this.props.team} initializeData={this.props.initializeData} fetchRequest={this.props.fetchRequest} />
                <DeleteTeamForm team={this.props.team} initializeData={this.props.initializeData} fetchRequest={this.props.fetchRequest} />  */}
            </Modal>
        )
    }
}


export default TeamBoard 


