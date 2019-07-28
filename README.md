Socket.IO with Elephant.IO
==========================
Socket.IO for real-time app

Installation
------------

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
composer require dickyermawan/yii2-socketio
```

or add

```
"dickyermawan/yii2-socketio": "*"
```

to the require section of your `composer.json` file.


Usage
-----

Once the extension is installed, simply use it in your code by  :


```php
//in components array
'socket' => [
    'class' => 'dickyermawan\socketio\ElephantIo',
    'host' => 'http://localhost:8089',
    'options' => [
        'headers' => [
            'X-My-Header: MyHead',
            'Authorization: Bearer 12345asdf'
        ]
    ]
]

//in your controller:
Yii::$app->socket->emit('realTime', [
    'param1' => 'param1',
    'param2' => 'param2'
]);
Yii::$app->socket->close();

```