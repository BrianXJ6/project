@inject('rtService', 'App\Services\RouteService')
@extends('layouts.web')
@section('subtitle', $header['subtitle'])
@section('description', $header['description'])
@section('keywords', $header['keywords'])
@section('cover')
@section('content')
<div class="container my-5">
    <div class="card shadow-lg mx-auto" style="width:290px">
        <div class="card-header bg-dark text-light">
            <h1 class="h4 m-0">{{ $header['subtitle'] }}</h1>
        </div>
        <div class="card-body">
            <user-login :laravel-routes="{{ json_encode($rtService->laravelRoutes()) }}"></user-login>
        </div>
    </div>
</div>
@endsection
@push('scripts')@endpush
