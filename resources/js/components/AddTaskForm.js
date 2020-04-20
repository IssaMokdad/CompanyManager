import React from 'react';
import OptionsInput from './OptionsInput';
import Input from './Input';
import ModalHeader from './ModalHeader';
import ModalButtonSubmit from './ModalButtonSubmit';
import Modal from './Modal';
class AddTaskForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {user_id:'', task_title:'', task_description:'' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeTaskTitle = this.handleChangeTaskTitle.bind(this);
        this.handleChangeTaskDescription = this.handleChangeTaskDescription.bind(this);
    }

        componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        
        if(this.props !== prevProps){
            this.setState({
                user_id:this.props.user_id,
            })

            
        }}


    handleChangeTaskTitle(task) { this.setState({ task_title: task }) }
    handleChangeTaskDescription(task) { this.setState({ task_description: task }) }

    handleSubmit(event) {
        event.preventDefault();
        let id=event.target.id
        
            let data = {
                'user_id' : this.state.user_id,
                'task_title':this.state.task_title,
                'task_description':this.state.task_description,
            }
            this.props.fetchRequest('addtask','post', data).then(data => {
                    if (data.success == 'success') {
                        swal({
                            title: "Added Successfully!",
                            icon: "success",
                        });
                        this.setState({
                            task_title: '',
                            task_description: '',
                            user_id:'',
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


    render() {
        console.log(this.state.user_id)
        return (
            <form method='post' onSubmit={this.handleSubmit} id='addtask'>
                <Modal classes="modal-dialog modal-lg" id='addtaskform' modalSubmitButton={<ModalButtonSubmit buttonTitle='Add' />} modalHeader={<ModalHeader title='Add Task Form' />}  >
                    <div className='row'>
                        <div className='col'>
                            <Input type='text' label='Task Title' value={this.state.first_name} handleChange={this.handleChangeTaskTitle} />
                            <Input type='text' label='Task Description' value={this.state.first_name} handleChange={this.handleChangeTaskDescription} />
                        </div>
                    </div>
                </Modal>
            </form>
        )
    }
}


export default AddTaskForm



