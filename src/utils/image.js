const img = {
    add : (img,x,y, attr, assetScale, game) => {
        let z = attr.z || 1;
        let asset = game.add.image(x*assetScale, y*assetScale,img)
            .setScale(assetScale).setDepth(z).setOrigin(0);
        if(attr.callback)  asset.setInteractive().on('pointerdown', ()=> attr.callback());
        if(attr.origin) asset.setOrigin(0.1,0.2);
        return asset;
    },
    
    addfull : (img, attr, assetScale, game) => {
        return this.a.add(img,attr,0,0,assetScale,game);
    }
};

export default img;
