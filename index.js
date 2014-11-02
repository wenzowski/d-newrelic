var derby = require('derby');

function Component () {}

Component.prototype.view = __dirname;

Component.prototype.init = function () {
  if (!derby.util.isServer) return;
  var newrelic = require('newrelic');
  var script = newrelic.getBrowserTimingHeader();
  console.log(script);
  this.model.root.set('$newrelic.script', script);
};

module.exports = Component;
