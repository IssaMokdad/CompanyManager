<?php

namespace App;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = ['company_name', 'description','id'];

    public function user()
    {
        return $this->hasMany(User::class);
    }

    public function department()
    {
        return $this->hasMany(Department::class);
    }
}
