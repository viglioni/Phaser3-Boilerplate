import Phaser from 'phaser';
import Constants from '../config/constants';
import logo from "../../assets/logo.png";
import star from "../../assets/star.png";
import loading_page from "../game-objects/loading.js";


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
