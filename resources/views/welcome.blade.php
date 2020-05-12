<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Yearbook.io</title>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Josefin+Sans" />
        <link href="{{ asset('css/main.css') }}" rel="stylesheet">

    </head>
    <body>
        <div id="root"/>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
