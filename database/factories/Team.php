<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Team;
use Faker\Generator as Faker;

$factory->define(Team::class, function (Faker $faker) {
    return [
        'team_name' => $faker->name,
        'department_id' => factory(App\Department::class)->create(),
    ];
});
