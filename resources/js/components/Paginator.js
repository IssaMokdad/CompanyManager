import React from 'react';
function Paginator(props) {
    function handlePageChange(event) {
        event.preventDefault()
        props.handlePageChange(parseInt(event.target.id))
    }

    let list = []
    let counter = 0
    if (props.activePage === 1) {
        for (let i = props.activePage; i <= props.last_page; i++) {
            if (counter === 6) {
                break
            }
            if (i === props.activePage) {
                list.push(<li key={i} className="page-item active"><a id={i} onClick={handlePageChange} href='' className="page-link" >{i}</a></li>)
            }
            else {
                list.push(<li key={i} className="page-item"><a id={i} onClick={handlePageChange} href='' className="page-link" >{i}</a></li>)
            }
            counter++
        }
    }
    else if (props.activePage === props.last_page) {
        for (let i = props.activePage; i > 0; i--) {
            if (counter === 6) {
                break
            }
            if (i === props.activePage) {
                list.unshift(<li key={i} className="page-item active"><a id={i} onClick={handlePageChange} href='' className="page-link" >{i}</a></li>)
            }
            else {
                list.unshift(<li key={i} className="page-item"><a id={i} onClick={handlePageChange} href='' className="page-link" >{i}</a></li>)
            }
            counter++
        }
    }
    else if (props.activePage === 2) {
        for (let i = 1; i <= props.last_page; i++) {
            if (counter === 6) {
                break
            }
            if (i === props.activePage) {
                list.push(<li key={i} className="page-item active"><a id={i} onClick={handlePageChange} href='' className="page-link" >{i}</a></li>)
            }
            else {
                list.push(<li key={i} className="page-item"><a id={i} onClick={handlePageChange} href='' className="page-link" >{i}</a></li>)
            }
            counter++
        }
    }

    else if (props.activePage === props.last_page - 1) {
        for (let i = props.last_page; i > 0; i--) {
            if (counter === 6) {
                break
            }
            if (i === props.activePage) {
                list.unshift(<li key={i} className="page-item active"><a id={i} onClick={handlePageChange} href='' className="page-link" >{i}</a></li>)
            }
            else {
                list.unshift(<li key={i} className="page-item"><a id={i} onClick={handlePageChange} href='' className="page-link" >{i}</a></li>)
            }
            counter++
        }
    }
    else if (props.activePage === props.last_page - 2) {
        for (let i = props.last_page; i > 0; i--) {
            if (counter === 6) {
                break
            }
            if (i === props.activePage) {
                list.unshift(<li key={i} className="page-item active"><a id={i} onClick={handlePageChange} href='' className="page-link" >{i}</a></li>)
            }
            else {
                list.unshift(<li key={i} className="page-item"><a id={i} onClick={handlePageChange} href='' className="page-link" >{i}</a></li>)
            }
            counter++
        }
    }
    else if (props.activePage > 2) {
        for (let i = props.activePage - 2; i > 0; i++) {
            if (counter === 6) {
                break
            }
            if (i === props.activePage) {
                list.push(<li key={i} className="page-item active"><a id={i} onClick={handlePageChange} href='' className="page-link" >{i}</a></li>)
            }
            else {
                list.push(<li key={i} className="page-item"><a id={i} onClick={handlePageChange} href='' className="page-link" >{i}</a></li>)
            }
            counter++
        }
    }
    return (< ul className="pagination justify-content-center" >{list}</ul>)
}


export default Paginator