import React from 'react';
function ModalHeader(props) {

    return (<div className="modal-header text-center">
        <h4 className="modal-title w-100 font-weight-bold">{props.title}</h4>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>)
}


export default ModalHeader