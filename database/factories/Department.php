<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Department;
use Faker\Generator as Faker;

$factory->define(Department::class, function (Faker $faker) {
    return [
        'department_name' => $faker->name,
        'company_id' => factory(App\Company::class)->create(),
    ];
});
