@extends('layouts.app')

@section('content')
<div >
Department Manager
</div>
<form action='logout' method='post'>
    <input type="hidden" name="_token" value={document.getElementById('csrf-token').value} />
    <button type='submit' id='logout' className="text-light nav-link" href="">Logout</button>
</form>
@endsection
