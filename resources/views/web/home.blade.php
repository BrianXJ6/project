@extends('layouts.web')
@section('subtitle', $header['subtitle'])
@section('description', $header['description'])
@section('keywords', $header['keywords'])
@section('cover')
@section('content')
<div class="container my-5">
    <h1>{{ $header['subtitle'] }}</h1>
    <hr>
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias at reprehenderit, labore ipsum sunt ab explicabo
        accusantium officia consequatur, vero nobis obcaecati debitis, beatae pariatur laborum nostrum! Velit, dolores
        fugiat?
    </p>
</div>
@endsection
@push('scripts')@endpush
