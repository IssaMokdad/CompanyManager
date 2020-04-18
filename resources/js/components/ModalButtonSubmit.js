import React from 'react';
function ModalButtonSubmit(props) {

    return (  <div className="modal-footer d-flex justify-content-center">
    <button type='submit' className="btn btn-primary">{props.buttonTitle}</button>
</div>)
}


export default ModalButtonSubmit