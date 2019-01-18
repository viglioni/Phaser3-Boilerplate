# Phaser 3 Webpack Project Template

A Phaser 3 Project Template based on [@photonstorm 's]( https://github.com/photonstorm/phaser3-project-template ) with Webpack.


### Requirements

We need [Node.js](https://nodejs.org) to install and run scripts.

## Install and run

Run next commands in your terminal:

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies and launch browser with examples.|
| `npm start` | Launch browser to show the examples. <br> Press `Ctrl + c` to kill **http-server** process. |

Default port is 8000, to change it see package.json
``` json
"start": "npm run build && webpack-dev-server --port=8000" 
```

| Relevand files | Path | Description |
| ---------------|------|-------------|
| Config | ./src/config/config.js | Phaser config file. Set here scenes, physics etc. |
| Constants | ./src/config/constants.js | Default (max) size is 1200x675. Ratio is 16:9. |
| Index (js) | ./src/index.js | Instantiates Phaser.Game using config file |
| Opening and SceneTemplate | ./src/scenes/ | Example of a working scene and a empty template |
| Loading Page | ./src/game-objects/loading.js | Displays progressbar while loading assets |
| Insert objects | ./shell_scripts/insert_objects.sh | Given all files in a directory, returns imports, load.image and add.image of each item |


| Relevand folders | Path | Description |
| ---------------|------|-------------|
| Assets | ./assets | Media files |
| Build | ./build | webpack automatically builds the project here, except index.html |




Thanks to @murilocruz for the help building the webpack

