var gulp = require("gulp");
var tslint = require("gulp-tslint");
var eslint = require("gulp-eslint");
var ts = require("gulp-typescript");


// tasks
// lint
gulp.task('eslint', function(){
    return gulp.src(['**/*.js', '!node_modules/**', '!bower_components/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
})

gulp.task('tslint', function(){
      return gulp.src('src/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});

var tsProject = ts.createProject('tsconfig.json');
// compile typescript
gulp.task('ts', function () {
    var tsResult = tsProject.src() // instead of gulp.src(...) 
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest("./"));
});

