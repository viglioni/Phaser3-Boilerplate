# Minimalist Phaser 3 Webpack Project Template

A Phaser 3 Project Template based on [@photonstorm 's]( https://github.com/photonstorm/phaser3-project-template ) with Webpack.
If you are looking into a more spartan webpack boilerplate, you should checkout [@simiancraft's](https://github.com/simiancraft/create-phaser-app) ☺

The main goal of this Boilerplate is to give a "functional programming abstraction" to Phaser and be easy for one to star coding a game.

The first version of this boilerplate is Object Oriented it will not be improved anymore, you can check it out [here](https://github.com/Viglioni/Phaser3-Boilerplate/tree/object-oriented)



![](https://github.com/Viglioni/Phaser3-Boilerplate/blob/functional-boilerplate/assets/screenshots/screenshot1.png)

![](https://github.com/Viglioni/Phaser3-Boilerplate/blob/functional-boilerplate/assets/screenshots/screenshot2.png)

![](https://github.com/Viglioni/Phaser3-Boilerplate/blob/functional-boilerplate/assets/screenshots/screenshot3.png)



### Requirements

We need [Node.js](https://nodejs.org) to install and run scripts.

## Install and run

Run next commands in your terminal:

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies and launch browser with examples.|
| `npm start` | Launch browser to show the examples. <br> Press `Ctrl + c` to kill **http-server** process. |

## Settings 
Default port is 8000, to change it see package.json
``` json
"start": "npm run build && webpack-dev-server --port=8000" 
```
# Using the boilerplate

## Direct access:
Some important directories have an alias, so you can access it anywhere without caring with relative paths
You can access any file inside the `boilerplate` directory just with `import component from 'boilerplate/path'`.
You can do it with `assets` and `scenes`.

## My code
All of your code should be in `/src` directory and your scenes in `/src/scenes`. To add an scene, you must import it inside `game-config/index.js` file and add it to the scene array inside it.

## Scene Manager
As stated in the example files, you should import it from boilerplate:

```javascript
import {createScene} from 'boilerplate/scene-manager'
```
For each scene you should give it a key (string). This key will be used when you need to start this scene from another:
```javascript
/*
 * Create the scene
 */
const sceneKey = "opening"
const {Scene, game, nextScene} =  createScene(sceneKey)

/*
 * change scene
 */
 nextScene('another-key-scene')
```

## State manager
To use a global state - i.e. a state that will be callable inside any scene:
```javascript
import {useState} from 'boilerplate/global-state'

const scene = () => {
  const [getState, setState] = useState("your-state-name-(string)", yourInitialValue)
```
If a state already exists you don't need to pass the second argument.
Both `getState` and `setState` are functions.

## Utils
To use utils, import it from `boilerplate` and call it using `game`:

```javascript
import {createScene} from 'boilerplate/scene-manager'
import utils from 'boilerplate/utils'

const scene = () => {
  const {Scene, game, nextScene} =  createScene(sceneKey)
   const {function1, function2, ...} = utils(game)
```

Checkout in `boilerplate/utils/index.js` what are the functions already implemented.

| Relevand files | Path | Description |
| ---------------|------|-------------|
| Config | ./src/gameiconfig/index.js | Phaser config file. Set here scenes, physics etc. |
| Index (js) | ./src/index.js | Instantiates Phaser.Game using config file |
| Opening, GameOver and SceneTemplate | ./src/scenes/ | Example of a working game and a empty template |
| Insert objects | ./shell_scripts/insert_objects.sh | Given all files in a directory, returns imports, load.image and add.image of each item |


| Relevand folders | Path | Description |
| ---------------|------|-------------|
| Assets | ./assets | Media files |
| Build | ./build | webpack automatically builds the project here, except index.html |

## Acknowledgements

Thanks to @murilocruz for the help building the webpack

