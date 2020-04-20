import React, { Fragment } from 'react';
import ModalHeader from './ModalHeader';
import Modal from './Modal';
class ImageForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { tasks: '' };
    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):

        if (this.props !== prevProps) {

            this.setState({
                tasks: this.props.tasks,
            })

        }
    }

    render() {
        let data
        if (this.state.tasks.length > 0){
        data = this.state.tasks.map(data =>
            <div>
                <h1 key={data.id}>{data.task_title}
                </h1>
                <p key={data.id}>{data.task_description}
                </p>
            </div>)}
            else{
                data=''
            }

        return (

            <Modal classes="modal-dialog modal-lg" id='showimage'  modalHeader={<ModalHeader title='Task List' />}  >
                {data}
            </Modal>

        )
    }
}

export default ImageForm
