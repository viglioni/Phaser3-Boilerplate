import Phaser from 'phaser';
import Constants from '../config/constants';
import loading_page from "../game-objects/loading.js";
import utils from '../utils';

const constants = new Constants();
constants.resize();
const {width, height, assetScale} = constants.getValues();
const center = {
    width: width/2,
    height: height/2
};


export default class sceneTemplate extends Phaser.Scene {
    constructor() {
        super({ key: 'template' });
    }

    preload() {
        loading_page(this.sys);
    }
    create() {
    }
    update() {
    }
    render() {}
}
