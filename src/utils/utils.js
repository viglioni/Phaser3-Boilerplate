import Constants from '../config/constants';
import random from './random';
import wait from './wait';
import compare from './compare';
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
    constructor(game, duration){
        this.game = game;
        this.duration = duration || 300;
    }

    getDuration() { return this.duration ;}

    // from constants.js
    getGameSize() { return constants.getValues(); }
    
    // from random.js
    prob(desirable){ return random.prob(desirable); }
    randInt(from,to,diff) { return random.randInt(from,to,diff); }
    rand(from, to, diff) { return random.rand(from,to,diff); }

    // from wait.js
    wait(time, callback) { wait.wait(time,callback, this.game); }

    // from compare.js
    compareObjs(obj1, obj2) { return compare.objs(obj1,obj2); }
    compareArrays(arr1, arr2, sort_before=false) {return compare.arrays(arr1,arr2,sort_before);}
    // from loading_page.js
    loading() { loadingPage(this.game); }

    // from image.js
    addPic(asset, x , y, attr, physics=false) { return img.add(asset, x,y, {...attr}, assetScale, this.game,physics); }
    addFullPic(asset, attr){ return this.addPic(asset,0,0,attr); }
    addHiddenPic(asset,x,y,{alpha=0, ...attr}={}) { return this.addPic(asset, x,y, {alpha, ...attr});}
    addHiddenFull(asset,attr) { return this.addHiddenPic(asset,0,0,attr); }
    addPhysical(asset,x,y,attr) { return this.addPic(asset,x,y,attr,true);}

    
    // from tweens.js
    show(target, duration=this.duration, alpha=1) { return tweens.changeAlpha([target].flat(100), duration, alpha, this.game); }
    hide(target, duration=this.duration) { return tweens.changeAlpha([target].flat(100), duration, 0, this.game); }
}
