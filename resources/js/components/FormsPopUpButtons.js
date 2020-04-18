import React from 'react';
import FormPopUpButton from './FormPopUpButton';
function FormsPopUpButtons() {

    return (

        <div className='container'>
            <div className='row'>
                <FormPopUpButton modalId='#userform' buttonTitle='Add a User' />
                <FormPopUpButton modalId='#departmentform' buttonTitle='Department Board' />
                <FormPopUpButton modalId='#teamform' buttonTitle='Team Board' />
            </div>
        </div>

    )
}


export default FormsPopUpButtons


