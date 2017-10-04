# bfn-grunt-webshot

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

> Grunt [plugin](http://gruntjs.com/) to run [webshot](https://github.com/BlueFidelity/node-webshot/) and take screenshots of webpages and local html.

A simple (naïve) wrapper for [webshot](https://github.com/BlueFidelity/node-webshot/) that uses phantomJS to render webpages to various image formats.

For example generate preview images of your project to send to clients, update screenshots for your documentation or get creative with the browser rendering engine. Use webshot features like offsets, timers and a 'trigger' callback for interesting setups.

## Getting Started

This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
$ npm install grunt-webshot --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-webshot');
```

## The "webshot" task       

### Options

The `grunt-webshot` specific options are:

* Required `site` and `savePath` are used as arguments to call the webshot method.

All other options are passed directly to webshot: see [the  documentation](https://github.com/BlueFidelity/node-webshot/) for a list of supported options.

```js
grunt.initConfig({
	webshot: {
		// example
		homepage: {
			options: {
				// url, file or html
				siteType: 'url',
				site: 'https://github.com/BlueFidelity/grunt-webshot',
				savePath: './tmp/shot.png',
				windowSize: {
					width: 1024,
					height: 768
				},
				shotSize: {
					width: 1024,
					height: 'all'
				}
			}
		}
	}
});
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/bfn-grunt-webshot.svg
[npm-url]: https://npmjs.org/package/bfn-grunt-webshot
[travis-image]: https://img.shields.io/travis/BlueFidelity/grunt-webshot/master.svg
[travis-url]: https://travis-ci.org/BlueFidelity/grunt-webshot
