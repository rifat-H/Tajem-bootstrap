const gulp = require('gulp')
const purgecss = require('gulp-purgecss')

gulp.task('purgecss', () => {
  return gulp
    .src('./css/*.css')
    .pipe(
      purgecss({
        content: ['./index.html', './link2.html']
      })
    )
    .pipe(gulp.dest('./css'))
})