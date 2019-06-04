import Constants from '../config/constants';
import random from './random';
import wait from './wait';
import object from './object';
import loadingPage from './loading';
import img from './image';

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
    addfull(asset, attr){ return img.addfull(asset, attr || {},  assetScale, this.game); }
    add(asset, x , y, attr) { return img.add(asset, x,y, attr || {}, assetScale, this.game); }
}
