const  img = (game, assetScale) => {

    const add =  (img,x,y, attr, assetScale) => {
        const z = attr.z || 1;
        const scale = attr.scale ? attr.scale*assetScale : assetScale;
        const assetType = attr.static ? 'staticImage' : 'image'
        const asset = game.scene.physics.add[assetType](x*assetScale, y*assetScale,img)
        asset.setDepth(z).setOrigin(0);
        if(attr.onClick)  asset.setInteractive().on('pointerdown', ()=> attr.onClick());
        if(attr.origin) asset.setOrigin(0.1,0.2);
        if(attr.alpha != undefined) asset.setAlpha(attr.alpha);
        if(attr.angularV) asset.setAngularVelocity(attr.angularV);
        if(attr.velocityX) asset.setVelocityX(attr.velocityX);
        asset.displayWidth *= scale;
        asset.displayHeight *= scale;
        return asset;
    }

    const addPic = (asset, x , y, attr) =>
          add(asset, x,y, {...attr}, assetScale, game);

    return {add, addPic}
    
};

export default img;
