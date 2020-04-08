import Phaser from 'phaser';
import 'babel-polyfill';
import config from './game-config';
import {createStateManager} from 'boilerplate/global-states'

const game = new Phaser.Game(config);

createStateManager()


