var iwidth = window.innerWidth;
var iheight = window.innerHeight;

export default class Constants {
    constructor(){
        this.width = iwidth;
        this.height = iheight;
        this.scale = this.width/1200;
    }

    resize(){
        this.width = Math.min(1200, Math.min(iwidth, Math.round(16*iheight/9)) );
        this.height = Math.round(9*this.width/16);
        this.scale = this.width/1200;

    }

    getValues(){
        return  {width: this.width, height: this.height, assetScale: this.scale};
    }
}
