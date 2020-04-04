import Phaser from 'phaser';
import constants from './constants';
import Opening from '../scenes/opening.js';


const {width, height, } = constants()

const scene = [ Opening ];

const  config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: width,
    height: height,
    scene,
    physics: { 
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    }
};

export default config;
