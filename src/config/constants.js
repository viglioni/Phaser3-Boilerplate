var iwidth = window.innerWidth;
var iheight = window.innerHeight;

// Default size is 1200 x 675
var max = 1200;

export default class Constants {
    
    constructor(){
        this.width = iwidth;
        this.height = iheight;
        this.scale = this.width/max;
    }

    resize(){
        iwidth = window.innerWidth;
        iheight = window.innerHeight;
        this.width = Math.min(max, Math.min(iwidth, Math.round(16*iheight/9)) );
        this.height = Math.round(9*this.width/16);
        this.scale = this.width/max;
    }

    getValues(){
        return  {width: this.width, height: this.height, assetScale: this.scale};
    }
}
