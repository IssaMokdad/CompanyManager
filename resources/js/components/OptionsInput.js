import React from 'react';
function OptionsInput(props) {
    function handleChange(event){
        let index = event.target.selectedIndex;
        let el = event.target.childNodes[index]
        let option = el.getAttribute('id');

            let data={
                id:option,
                value:event.target.value
            } 
        props.handleChange(data)
    }
    let content = [];
    let name=props.nameDatabaseDescription
    let data = Array.from(props.unit);
    if (data.length > 0) {
        content.push(<option key={0} value=''>Choose a {props.unitDescription}</option>)
    }
    else {
        content.push(<option key={0} value=''>There are no {props.unitDescriptionPlural}, add {props.unitDescription} in {props.unitDescriptionPlural} form</option>)
    }
    content.push(data.map(data => {
        return <option value={data[name]} key={data.id} id={data.id}>{data[name]}</option>
    })
    )

    return (

        <div className={props.classes}>
            <label data-error="wrong" data-success="right" htmlFor="orangeForm-name"> {props.unitDescriptionPlural.charAt(0).toUpperCase() + props.unitDescriptionPlural.slice(1)}</label>
            {props.required==='notRequired' ? <select onChange={handleChange} value={props.selected} className="form-control validate">
            {content}
            </select> : <select onChange={handleChange} value={props.selected} className="form-control validate" required>
            {content}
            </select>}
        </div>
    )
}

export default OptionsInput