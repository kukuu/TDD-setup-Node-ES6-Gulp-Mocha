/*
Initial setup
...............
...............
For our setup you want to install gulp, gulp-postcss, gulp-sourcemaps, postcss-import, precss, Autoprefixer and cssnano
yarn add -D gulp gulp-postcss gulp-sourcemaps postcss-import gulp-postcss autoprefixer cssnano gulp-postcss
*/


gulp.task('css', () => {
  const postcss = require('gulp-postcss');
  const sourcemaps = require('gulp-sourcemaps');
  const postcssImport = require('postcss-import');
  const precss = require('precss');
  const autoprefixer = require('autoprefixer');
  const cssnano = require('cssnano');
  return gulp
    .src('src/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      postcssImport(),
      precss(),
      autoprefixer(),
      cssnano(),
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/'));
});

gulp.task('default', ['css']);