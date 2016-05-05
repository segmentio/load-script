# load-script

[![Sauce Test Status](https://saucelabs.com/buildstatus/sio_load-script)](https://saucelabs.com/u/sio_load-script)

Component which asynchronously loads a JavaScript file by appending a script tag to the DOM.

## Installation

```sh
$ npm install @segment/load-script
```

## Examples
    
```js
var load = require('@segment/load-script');

load('//www.google-analytics.com/ga.js');
```

Load in a URL depending on the current protocol.

```js
var load = require('@segment/load-script');

load({
  http: 'http://www.google-analytics.com/ga.js',
  https: 'https://ssl.google-analytics.com/ga.js'
});
```

## API

### `loadScript(src || options, callback)`

Load the given script either by passing a `src` string, or an `options` object:

```js
{
  src: '//example.com/lib.js', // same as `src` string
  http: 'http://example.com/lib.js', // `src` to load if the protocol is `http:`
  https: 'https://ssl.example.com/lib.js' // `src` to load if the protocol is `https:`
}
```
  
You can also pass in a `callback` that will be called when the script loads with `err, event`.
