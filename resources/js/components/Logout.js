import React from 'react';
function Logout() {

    return (<form action='logout' method='post'>
        <input type="hidden" name="_token" value={document.getElementById('csrf-token').value} />
        <button type='submit' id='logout' className="text-light nav-link" href="">Logout</button>
    </form>)
}


export default Logout