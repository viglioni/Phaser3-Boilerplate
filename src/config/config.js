import Phaser from 'phaser';
import Constants from './constants';
import SceneTemplate from '../scenes/scene-template.js';

const constants = new Constants();
constants.resize();
const {width, height, assetScale} = constants.getValues();

const actual = [];

const  config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: width,
    height: height,
    //scene: actual,
    scene: [SceneTemplate],
    physics: { 
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: false
        }
    }
};

export default config;
