import Phaser from 'phaser';
import Constants from '../config/constants';
import Utils from '../utils/utils';


export default class sceneTemplate extends Phaser.Scene {
    constructor() {
        super({ key: 'template' });
        this.utils = new Utils(this.sys);
        console.log("old")
    }

    preload() {
        this.utils.loading();
    }
    create() {}
    update() {}

}
