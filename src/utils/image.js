const img = {
    add : (img,x,y, attr, assetScale, game) => {
        let z = attr.z || 1;
        let scale = attr.scale ? attr.scale*assetScale : assetScale;
        let asset = game.add.image(x*assetScale, y*assetScale,img)
            .setScale(scale).setDepth(z).setOrigin(0);
        if(attr.callback)  asset.setInteractive().on('pointerdown', ()=> attr.callback());
        if(attr.origin) asset.setOrigin(0.1,0.2);
        return asset;
    },
    
};

export default img;
