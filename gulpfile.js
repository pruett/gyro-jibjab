const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', () =>
  gulp.src('src/index.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist'))
);
