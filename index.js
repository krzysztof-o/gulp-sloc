var through = require('through2');
var gutil = require('gulp-util');

const PLUGIN_NAME = 'gulp-sloc2';

module.exports = function() {
  var numberOfLines = 0;
  return through.obj(function (file, enc, callback) {
    if (!file.isNull()) {
      numberOfLines += getNumberOfLines(file.contents.toString());  
    }
    this.push(file);
    return callback();
  }, function() {
    gutil.log(formatNumber(numberOfLines) + ' sloc');
    this.emit('end');
  });
};

function getNumberOfLines(content) {
  return content.split(/\r\n|\r|\n/).length;
}

function formatNumber(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}