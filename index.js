var derby = require('derby');

function Component () {}

Component.prototype.view = __dirname;

Component.prototype.init = function () {
  if (!derby.util.isServer) return;
  var newrelic = require('newrelic');
  var script = newrelic.getBrowserTimingHeader();
  this.model.root.set('$newrelic.script', script);
};

Component.prototype.destroy = function () {
  this.model.del('$newrelic');
};

module.exports = Component;
