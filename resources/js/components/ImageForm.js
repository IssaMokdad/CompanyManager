import React from 'react';
import ModalHeader from './ModalHeader';
import Modal from './Modal';
class ImageForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {imagePath: ''};
    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        
        if(this.props !== prevProps){
            
            this.setState({
                imagePath:this.props.imagePath,
            })
            
        }}

    render() {
        return (
            <Modal id='showimage' modalHeader={<ModalHeader title='Receipt' />}  >
                <img height='600' width='400' src={this.state.imagePath} />
            </Modal>
        )
    }
}

export default ImageForm
