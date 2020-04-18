<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $fillable = ['team_name', 'department_id'];

public function users()
{
    return $this->hasMany(User::class);
}

public function department()
{
    return $this->belongsTo(Department::class);
}

}
