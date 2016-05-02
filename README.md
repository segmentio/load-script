
# load-script

  Component: loads a Javascript file by appending a script tag to the DOM.

## Installation

    $ component install segmentio/load-script

## Example
    
```js
var load = require('load-script');

load('//www.google-analytics.com/ga.js');
```

Loads in the Google Analytics library.

```js
var load = require('load-script');

load({
  http  : 'http://www.google-analytics.com/ga.js',
  https : 'https://ssl.google-analytics.com/ga.js'
});
```

Loads in the right URL depending on the protocol.

## API

### loadScript(src || options, callback)
  Load the given script either by passing a `src` string, or
  an `options` object:

    {
        src: '//example.com/lib.js', // same as `src` string
        http: 'http://example.com/lib.js', // `src` to load if the protocol is `http:`
        https: 'https://ssl.example.com/lib.js' // `src` to load if the protocol is `https:`
    }
  
  You can also pass in a `callback` that will be called when
  the script loads with `err, event`.

## License

  MIT
