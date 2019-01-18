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


export default class Opening extends Phaser.Scene {
    constructor() {
        super({ key: 'opening' });
    }

    preload() {
        loading_page(this.sys);
        this.load.image('logo', logo);
        this.load.image('star', star);
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
        let star = this.add.image(Math.random() *1000%width, Math.random() * 1000%height, 'star').setScale(assetScale);
        this.time.delayedCall(Math.random()*10000%10000 ,() => star.destroy());
    }
    render() {}
}
