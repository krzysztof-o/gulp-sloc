## gulp-sloc
Gulp plugin to log number of source lines of code a.k.a. [sloc](http://en.wikipedia.org/wiki/Source_lines_of_code)

```javascript
var sloc = require('gulp-sloc-simply');

gulp.src('*')
  .pipe(sloc())
```
```
[gulp] 123 456 sloc
```

## Installation
```
npm install gulp-sloc-simply
```

## Test
```
mocha
```