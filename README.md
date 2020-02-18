# TDD setup with Node, ES6, Gulp and Mocha

To set up Gulp for this exercise, simply load in the gulp-mocha package using npm. This will load the dependencies and add to the devDependencies options to your package.json file and make sure they are available.

```
npm install --save-dev gulp gulp-mocha babel-register babel-preset-es2015 chai

```

package.json

```
{
  "devDependencies": {
    "babel-preset-es2015": "^6.9.0",
    "babel-register": "^6.9.0",
    "chai": "^3.5.0",
    "gulp": "^3.9.1",
    "gulp-mocha": "^2.2.0"
  },
  "babel": {
    "presets": ["es2015"]
  }
}

```


## Running Tests

1. Install Mocha globally

```
	npm install -g mocha
```


## Automating with Gulp

Install Gulp globally

```
npm install -g gulp

```

## Running Automated Tests

```
gulp taskname

```
See  - https://github.com/kukuu/AGILITY/blob/master/gulp-tdd.png


## Moving from SASS to PostCSS


### Initial setup
For our setup you want to install gulp, gulp-postcss, gulp-sourcemaps, postcss-import, precss, Autoprefixer and cssnano
yarn add -D gulp gulp-postcss gulp-sourcemaps postcss-import gulp-postcss autoprefixer cssnano gulp-postcss.

### Imports

Although import is already in CSS, postcss-import gives you some more flexibility over your imports looking into node_modules and other directories your specify, you may want to use this plugin at the top of your stack so all the transformation after this will process all your data at once as a single file.
 
### SCSS Syntax
You can implement SCSS like syntax in two way: cherry picking plugins or using precss which combines Sass-like syntactical sugar — like variables, conditionals, and iterators — with emerging CSS features — like color functions, logical and custom properties, media query ranges, and image sets.
But if you want to go cherry picking there are some interesting ones that serve the same purpose:

Variables: postcss-simple-vars

Nested Selectors: postcss-nested

Mixins: postcss-mixins

### Autoprefixer
Autoprefixer is a plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use.


### Minification
cssnano is a modern, modular compression tool written on top of the PostCSS ecosystem, which allows us to use a lot of powerful features in order to compact CSS appropriately.

#### config file - gulpfile.js

```
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

```
### tdd test Snipets

https://github.com/kukuu/algorithms/tree/master/algorithms/tdd-test-snippets
### Adding test coverage

https://github.com/daniellmb/grunt-istanbul-coverage
## Related

https://github.com/kukuu/testing-with-Jest 

https://github.com/kukuu/styled-components-in-ReactJS/blob/master/README.md 

https://github.com/kukuu/AGILITY/blob/master/gulp-tdd.png 

https://github.com/kukuu/AGILITY/blob/master/test-pyramid-coverage.jpg


# Node.js Setup with Mocha, Chai,Babel7 and  ES6

[Coming soon!]
