<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Task;
use Faker\Generator as Faker;

$factory->define(Task::class, function (Faker $faker) {
    return [
        'task_title' => $faker->word,
        'task_description'=>$faker->unique()->sentence(100),
        'user_id' => factory(App\User::class)->create(),
        'team_id' => factory(App\Team::class)->create(),
    ];
});
