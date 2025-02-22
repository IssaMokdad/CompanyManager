<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Role;
use Faker\Generator as Faker;

$factory->define(Role::class, function (Faker $faker) {
    return [
        'role_type' => $faker->name,
        'company_id'=>factory(App\Company::class)->create()
    ];
});
