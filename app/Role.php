<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = ['role_type','company_id'];


    public function user()
    {
        return $this->hasMany(User::class);
    }
}
