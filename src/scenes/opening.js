import Phaser from 'phaser';
import Constants from '../config/constants';
import * as Assets from "../../assets/";
import Utils from '../utils/utils';

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
        this.utils = new Utils(this.sys);
    }

    preload() {
        this.utils.loading();
//        loading_page(this.sys);
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
        let star = this.add.image(
            this.utils.randInt(0,width),
            this.utils.randInt(0,height),
            'star'
        ).setScale( this.utils.rand(0.5*assetScale,assetScale));

        this.utils.wait(this.utils.randInt(100,10000) , () => star.destroy()  );

    }
    render() {}
}
