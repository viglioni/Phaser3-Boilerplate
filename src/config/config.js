import Phaser from 'phaser';
import constants from './constants';
import Opening from '../scenes/opening.js';
import sceneTemplate from '../scenes/old_templ'


const {width, height, } = constants()

const actual = [ Opening];

const  config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: width,
    height: height,
    scene: actual,
    //scene: [Opening],
    physics: { 
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: false
        }
    }
};

export default config;
