import React from 'react';
import ModalHeader from './ModalHeader';
import ModalButtonSubmit from './ModalButtonSubmit';
import Modal from './Modal';
import EditDepartmentForm from './EditDepartmentForm';
import DeleteDepartmentForm from './DeleteDepartmentForm';
import AddDepartmentForm from './AddDepartmentForm';
class DepartmentBoard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Modal classes="modal-dialog modal-lg" id='departmentform' modalHeader={<ModalHeader title='Department Form' />}>
                <AddDepartmentForm  initializeData={this.props.initializeData} fetchRequest={this.props.fetchRequest}/>
                <EditDepartmentForm department={this.props.department} initializeData={this.props.initializeData} fetchRequest={this.props.fetchRequest} />
                <DeleteDepartmentForm department={this.props.department} initializeData={this.props.initializeData} fetchRequest={this.props.fetchRequest} />
            </Modal>
        )
    }
}


export default DepartmentBoard 


