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