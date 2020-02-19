# Node.js Setup (Mocha & Chai, Babel7, ES6)

I usually install Babel to compile ES6/ES7 back to ES5, Mocha & Chai for unit testing purposes, and Nodemon to automatically restart the app. First, let’s generate an empty package.json for our project.


```
npm init -y

```


Now, we can add some development dependencies.

```

npm install --save-dev @babel/cli @babel/core @babel/node @babel/register @babel/preset-env chai mocha nodemon

```

After the installation our package.json should look like this:

```

[tba]

```

Babel 7 packages are now “scoped” so the old babel-cli became @babel/cli.

## ES6 & Node

Create an index.js file with a simple function that returns a string so we can test if everything is correct. I always put my index file to the root of a src folder. If you place it somewhere else remember to adjust the path in your package.json scripts accordingly.

```
// ./src/index.js


const sayHello = _ => "Hello guys!";

console.log(sayHello())

```

To see the result, copy and paste the following script to your package.json.

```
"start": "nodemon ./src/index.js",

```


After typing npm start in the console/terminal, you will see something like this:


```

[tba]

```

Nodemon monitors every change in your code and automatically starts the application again if you change something. Place an ES6 export statement to the end of the index.js file and run the app again.

```
export default sayHello

```


The result is:

```

[tba]

```





Node can’t recognize ES6 export/import keywords. To fix that, we need babel to compile our export default sayHello to something like:


```
exports.default = sayHello

```
To do that, we need a file in our project root called .babelrc, Copy and paste the following code into it.

```

{
"presets": ["@babel/preset-env"]
}

```

Next, we need to adjust our start script as well.

```
"start": "nodemon --exec babel-node ./src/index.js"

```

## Testing

Let’s write a quick test to see if it works. Remember we have already installed chai and mocha so we can use them without any further configuration.

```

// ./test/index.spec.js

import { expect } from "chai"

import sayHello from "../src/index"

describe("index test", () => {

  describe("sayHello function", () => {

    it("should say Hello guys!", () => {

      const str = sayHello();

      expect(str).to.equal("Hello guys!")

    })

  })

})


```

Also, we need a test script in our package.json:

```

"test": "./node_modules/.bin/mocha --compilers js:@babel/register"

```

Three important facts about the test script:


1. If you install mocha globally with npm install -g you can use "mocha --compilers js:@babel/register" instead.

2. Since our test file is located in the test folder, mocha finds our index.spec.js automatically.

3. The --compilers js:@babel/register tells mocha that we use ES6 so it should take care of it. That’s why we installed @babel/register.


Now, type: 

```
npm test 

```


in your console/terminal and you will see the test passing.


## Compiling to the Dist Folder

If you are curious how your compiled ES5 compatible code looks like you can add the following scripts to your package.json.

```

"build": "babel src --out-dir ./dist --source-maps",
"serve": "node ./dist/index.js",


```


The 'npm run'  build command will create a compiled index.js file in the dist folder and the 'npm run serve' will run that instead of the original in the src folder. We also use '--source-maps'  so that when we debug our './dist/index.js' we can see the actual ES6 code that we wrote.


## Debugging

As a JS Engineer, I rather debug my code using a browser than an IDE. Fortunately, node allows us to debug our applications in a browser. Here’s another script for your package.json.

``` 

"debug": "node --inspect-brk ./dist/index.js"

```

After 'npm run debug' you can see the following message:

```

[tba]

```


Take the highlighted string that was generated for you and append it to this url. Replace [xxxx]:

```

chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:9229/[xxxx]

```

Then, paste it to the browser and you are done!


