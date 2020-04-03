import Phaser from 'phaser';
import 'babel-polyfill';
import config from './config/config';
import {createStateManager} from './global-states'

const game = new Phaser.Game(config);

createStateManager()


