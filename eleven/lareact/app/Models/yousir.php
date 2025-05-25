<?php

namespace App\Models;

use Pest\ArchPresets\Custom\newFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class yousir extends Model
{
    /** @use HasFactory<\Database\Factories\YousirFactory> */
    use HasFactory;

    protected $fillable = ['name', 'email', 'password', 'password_confirmation', 'contact_number', 'token']; 
    
}
