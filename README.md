# rulla

[![Build status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![XO code style][codestyle-image]][codestyle-url]

> An opinionated preconfigured Rollup for easy bundling

## Installation

Install `rulla` using [npm](https://www.npmjs.com/):

```bash
npm install --save rulla
```

## Usage

```
$> rulla --help

An opinionated preconfigured Rollup for easy bundling

  Usage:
    rulla <options>

  Options:
    -e, --entry=<file>     Entry file
    -d, --dest=<file>      Destination file
    -s, --source-map       Should source maps be generated (default: false)
    -f, --format=<format>  Rollup output format (default: cjs)
```


## License

MIT © [Joakim Carlstein](http://joakim.beng.se)

[npm-url]: https://npmjs.org/package/rulla
[npm-image]: https://badge.fury.io/js/rulla.svg
[travis-url]: https://travis-ci.org/joakimbeng/rulla
[travis-image]: https://travis-ci.org/joakimbeng/rulla.svg?branch=master
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-XO-5ed9c7.svg?style=flat
