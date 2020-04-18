import React from 'react';
function AmountInput(props) {
    function handleChangeAmount(e){
        props.handleChangeAmount(e.target.value)
        
    }
    return (<div className="md-form mb-5">
        <i className="fas fa-money-check-alt"></i>
        <input placeholder='Enter the expense amount' onChange={handleChangeAmount} value={props.amount} type="number" id="amount" className="form-control validate" required />
        <label data-error="wrong" data-success="right" htmlFor="orangeForm-email">Amount</label>
    </div>)
}


export default AmountInput