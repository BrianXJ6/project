<?php

namespace App\Services;

use Illuminate\Support\Facades\Route;

class RouteService {

    public function laravelRoutes() {
        $result = [];
        foreach (Route::getRoutes() as $route)
            if ($route->getName() && !str_contains($route->getName(), 'ignition') && !str_contains($route->getName(), 'home'))
                $result[$route->getName()] = '/' . $route->uri;
        return $result;
    }
}
