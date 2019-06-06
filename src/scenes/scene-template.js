import Phaser from 'phaser';
import Constants from '../config/constants';
import Utils from '../utils/utils';

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
        this.utils = new Utils(this.sys);
    }

    preload() {
        this.utils.loading();
    }
    create() {}
    update() {}

}
