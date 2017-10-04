/*
 * grunt-webshot
 * https://github.com/Bartvds/grunt-webshot
 *
 * Copyright (c) 2013 Bart van der Schoor
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
	'use strict';

	grunt.registerMultiTask('webshot', 'Render screenshots of webpages', function() {
		var options = this.options({
			site: null,
			savePath: null,
			retryOptions: {}
		});
		var done = this.async();

		// late init webshot
		var webshot = require('bfn-webshot');

		if (!options.site) {
			grunt.fail.warn('undefined site');
			done(false);
		}
		if (!options.savePath) {
			grunt.fail.warn('undefined savePath');
			done(false);
		}

		// copy own options
		var site = options.site;
		var savePath = options.savePath;
		var retryOptions = options.retryOptions;

		// clean from webshot's options
		delete options.site;
		delete options.savePath;
		delete options.retryOptions;
		
		if (retryOptions.maxAttempts && typeof retryOptions.waitTime !== 'number') {
			retryOptions.waitTime = 1000;
		}
		
		var runWebshot = function(attempt) {
			webshot(site, savePath, options, function(err) {
				if (err) {
					grunt.log.writeln('webshot JSException: ' + err);
				}
			}, function(err) {
				if (err) {
					grunt.log.writeln('webshot error:');
					if (retryOptions.maxAttempts && attempt < retryOptions.maxAttempts && err == 'Error: PhantomJS did not respond within the given timeout setting.') {
						grunt.log.writeln('webshot warning: last attempt failed');
						setTimeout(function() {
							runWebshot(attempt++);
						}, attempt * retryOptions.waitTime);
					} else {
						grunt.fail.warn(err);
						done(false);
					}
				} else {
					done(true);
				}
			});
		};

		// lets go
		runWebshot(1);
	});
};
