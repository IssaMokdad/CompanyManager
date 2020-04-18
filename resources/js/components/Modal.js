import React, { Fragment } from 'react';
function Modal(props) {
    return (
        <Fragment>
            <div className="modal fade" id={props.id} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className={props.classes} role="document">
                    <div className="modal-content">
                        {props.modalHeader}
                        <div className="modal-body mx-3">
                            {props.children}
                        </div>
                        {props.modalSubmitButton}
                    </div>
                </div>
            </div>
            <div>{props.formPopUpButton}</div>
        </Fragment>
    )


}


export default Modal