import Constants from '../config/constants';
import random from './random';
import wait from './wait';
import object from './object';
import loadingPage from './loading';
import img from './image';
import tweens from './tweens';

const constants = new Constants();
constants.resize();
const {width, height, assetScale} = constants.getValues();
const center = {
    width: width/2,
    height: height/2
};


export default class Utils {
    constructor(game){
        this.game = game;
    }

    // from random.js
    prob(desirable){ return random.prob(desirable); }
    randInt(from,to,diff) { return random.randInt(from,to,diff); }
    rand(from, to, diff) { return random.rand(from,to,diff); }

    // from wait.js
    wait(time, callback) { wait.wait(time,callback, this.game); }

    // from objects.js
    compareObjs(obj1, obj2) { return object.compareObjs(obj1,obj2); }

    // from loading_page.js
    loading() { loadingPage(this.game); }

    // from image.js
    addfullpic(asset, attr){ return img.add(asset,0,0, attr || {},  assetScale, this.game); }
    addpic(asset, x , y, attr) { return img.add(asset, x,y, attr || {}, assetScale, this.game); }

    // from tweens.js
    show(target, duration, alpha) { return tweens.changeAlpha(target, duration || 300, alpha || 1, this.game); }
    hide(target, duration) { return tweens.changeAlpha(target, duration || 300, 0, this.game); }
}
