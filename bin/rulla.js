#!/usr/bin/env node
'use strict';
const meow = require('meow');
const rulla = require('../src');

const {flags: cli, showHelp} = meow(`
  Usage:
    rulla <options>

  Options:
    -e, --entry=<file>     Entry file
    -d, --dest=<file>      Destination file
    -s, --source-map       Should source maps be generated (default: false)
    -f, --format=<format>  Rollup output format (default: cjs)
`, {
	alias: {
		e: 'entry',
		d: 'dest',
		s: 'source-map',
		f: 'format'
	}
});

if (!cli.entry || !cli.dest) {
	console.error('Both `entry` and `dest` files are required!');
	showHelp(1);
}

rulla(cli);
