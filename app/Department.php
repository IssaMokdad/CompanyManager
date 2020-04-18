<?php

namespace App;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    protected $fillable = ['department_name','company_id', 'id'];
    public function user()
    {
        return $this->hasMany(User::class);
    }

    public function team()
    {
        return $this->hasMany(Team::class);
    }
    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
