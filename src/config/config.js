import Phaser from 'phaser';
import Constants from './constants';
import Opening from '../scenes/opening.js';

const constants = new Constants();
constants.resize();
const {width, height, assetScale} = constants.getValues();

const actual = [];

const  config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: width,
    height: height,
    //scene: actual,
    scene: [Opening],
    physics: { 
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: false
        }
    }
};

export default config;
