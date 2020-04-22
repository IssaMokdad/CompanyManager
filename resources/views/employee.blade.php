@extends('layouts.app')

@section('content')
<div >
Employee
<form action='logout' method='post'>
    @csrf
    <button type='submit' id='logout' className="text-light nav-link" href="">Logout</button>
</form>
</div>
@endsection