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
        Object.keys(Assets).map( name => this.load.image(name, Assets[name]));
    }
    create() {
        let phaser_logo = this.utils.add('logo', 409, 0,
                                         {z:10, callback: ()=>{console.log('hehe');}});
        // var phaser_logo = this.add.image(center.width-(382/2)*assetScale,0, 'logo')
        //     .setOrigin(0).setScale(assetScale);
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
        ).setScale( this.utils.rand(0.5*assetScale,assetScale)).setDepth(3);

        this.utils.wait(this.utils.randInt(100,10000) , () => star.destroy()  );

    }
    render() {}
}
