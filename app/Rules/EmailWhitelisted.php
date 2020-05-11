<?php

namespace App\Rules;

use App\DomainWhitelist;
use App\EmailWhitelist;
use Illuminate\Contracts\Validation\Rule;

class EmailWhitelisted implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        // TODO: Probably shouldn't rely on this @ being there
        $domain = substr($value, strpos($value, '@') + 1);

        if (
            DomainWhitelist::where('domain', $domain)->exists() ||
            EmailWhitelist::where('email', $value)->exists()
        ) {
            return true;
        }
        return false;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'We are not currently accepting users with your email at this time.';
    }
}
