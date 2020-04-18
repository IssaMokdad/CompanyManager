import React from 'react';
function NavBar(props) {

    return (
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark fixed-top">
            <a className="navbar-brand" >{props.first_name} {props.last_name}</a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    {props.children}
                </li>
                <li></li>
            </ul>
        </nav>
    )
}


export default NavBar