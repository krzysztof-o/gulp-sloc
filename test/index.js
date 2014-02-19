var gulp = require('gulp');
var gutil = require('gulp-util');
var sinon = require('sinon');
var sloc = require('..');

describe('gulp-sloc', function() {

  before(function() {
    sinon.stub(gutil, 'log', function(){});
  });

	it('should return 10 sloc', function(done) {
	  checkOutput('/fixture/file1.txt', '10 sloc', done);
	});

	it('should return 100 sloc', function(done) {
	  checkOutput('/fixture/file2.txt', '100 sloc', done);
	});

	it('should return 1000 sloc', function(done) {
    checkOutput('/fixture/file3.txt', '1 000 sloc', done);
  });

  it('should return 1110 sloc', function(done) {
    checkOutput('/fixture/*.txt', '1 110 sloc', done);
  });

  it('should return 0 sloc when no files', function(done) {
    checkOutput('/fixture/non-existing-file.txt', '0 sloc', done);
  });

  after(function() {
    gutil.log.restore();
  });

});


function checkOutput(files, output, done) {
	gulp.src(__dirname + files)
    .pipe(sloc())
    .on('finish', function() {
    	sinon.assert.calledWith(gutil.log, output);
    	done();
    });
}

