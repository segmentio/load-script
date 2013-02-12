
# load-script

  Component: loads a Javascript file by appending a script tag to the DOM.

## Installation

    $ component install segmentio/load-script

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
  the script loads successfully.

## License

  MIT
