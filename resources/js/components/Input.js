import React from 'react';
function Input(props) {
    function handleChange(e){ 
        props.handleChange(e.target.value)
        
    }
    return (<div className="md-form mb-3">
        <label data-error="wrong" data-success="right" htmlFor="orangeForm-email">{props.label}</label>
        {props.disabled ? <input placeholder={props.placeholder} onChange={handleChange} value={props.value} type={props.type} className="form-control validate" disabled required /> : <input placeholder={props.placeholder} onChange={handleChange} value={props.value} type={props.type} className="form-control validate" required />  }
        
        
    </div>)
}


export default Input