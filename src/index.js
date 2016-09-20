'use strict';
const {rollup} = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const replace = require('rollup-plugin-replace');

const quote = str => `'${str}'`;

module.exports = function ({
	sourceMap = false,
	include,
	exclude,
	format = 'cjs',
	entry,
	dest,
	jsnext = false,
	main = true,
	module: mod = false
}) {
	return rollup({
		entry,
		plugins: [
			nodeResolve({
				jsnext,
				main,
				module: mod,
				extensions: ['.js', '.json']
			}),
			commonjs({include, exclude}),
			replace({
				'process.env.NODE_ENV': quote(process.env.NODE_ENV || 'development')
			})
		]
	})
	.then(bundle => bundle.write({
		dest,
		format,
		sourceMap
	}));
};
