<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            // Add Foreign keys
            $table->foreignId('user_id')->constrained();
            $table->foreignId('page_id')->constrained();

            $table->boolean('hidden')->default(false);
            $table->text('body');

            // TODO: Will have to add some sort of styling to this
            // TODO: Location on the page

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('messages');
    }
}
