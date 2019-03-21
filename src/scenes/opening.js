import Phaser from 'phaser';
import Constants from '../config/constants';
import * as Assets from "../../assets/";

import loading_page from "../game-objects/loading";


const constants = new Constants();
constants.resize();
const {width, height, assetScale} = constants.getValues();
const center = {
    width: width/2,
    height: height/2
};


export default class Opening extends Phaser.Scene {
    constructor() {
        super({ key: 'opening' });
    }

    preload() {
        loading_page(this.sys);
        Object.keys(Assets).map( name => this.load.image(name, Assets[name]));
    }
    create() {
        var phaser_logo = this.add.image(center.width-(382/2)*assetScale,0, 'logo').setOrigin(0).setScale(assetScale);
        phaser_logo.depth = 2;
        this.tweens.add({
            targets: phaser_logo,
            y: height/2,
            duration: 2000,
            ease: 'Power2',
            yoyo: true,
            loop: -1
        });
        
    }
    update() {
        let star = this.add.image(Math.random() *1000%width, Math.random() * 1000%height, 'star').setScale(assetScale*(Math.random()*10%5+5)/10);
        this.time.delayedCall(Math.random()*10000%10000 ,() => star.destroy());
    }
    render() {}
}
