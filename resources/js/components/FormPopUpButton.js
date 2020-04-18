import React from 'react';
function FormPopUpButton(props) {

    return (<div className='col-2 mb-3' style={{ marginTop: '60px' }}>
        <div className="d-inline text">
            <a href="" className="btn mt-3 btn-primary btn-rounded mb-4" data-toggle="modal" data-target={props.modalId}>{props.buttonTitle}</a>
        </div>
    </div>)
}


export default FormPopUpButton