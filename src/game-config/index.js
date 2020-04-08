import Phaser from 'phaser';
import constants from 'boilerplate/game-size/constants';
import Opening from 'scenes/opening.js';
import GameOver from 'scenes/game-over';


const {width, height, } = constants()

const scene = [ Opening, GameOver ];

const  config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: width,
    height: height,
    scene,
    physics: { 
        default: 'arcade',
        arcade: {
            gravity: { y: 10 },
            debug: false
        }
    }
};

export default config;
