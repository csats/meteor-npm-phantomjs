'use strict';

Package.describe({
  name: 'csats:phantomjs',
  summary: 'Wrapper for csv-parse npm package',
  version: '1.0.0',
  git: 'https://github.com/csats/meteor-npm-phantomjs'
});

Package.on_use(function(api) {
  api.versionsFrom('1.0');
  api.add_files('server/phantomjs.js', ['server']);
  api.export('phantomjs');
});

Package.onTest(function(api) {
  api.use('csats:phantomjs');
  api.use('tinytest@1.0.0');
});

Npm.depends({
  phantomjs: '1.9.16'
});
