import React from 'react';
function CategoryInput(props) {
    function handleChangeCategoryInput(e){
        props.handleChangeCategoryInput(e.target.value)
    }
    return (<div className="md-form">
        <input placeholder={props.placeholder} onChange={handleChangeCategoryInput} value={props.categoryInput} type="text" id="catgoryInput" className="form-control validate" required />
        <label data-error="wrong" data-success="right" htmlFor="orangeForm-email"></label>
        </div>)
}


export default CategoryInput