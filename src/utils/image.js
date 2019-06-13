const img = {
    add : (img,x,y, attr, assetScale, game, physics) => {
        let z = attr.z || 1;
        let scale = attr.scale ? attr.scale*assetScale : assetScale;
        let asset = physics
            ? game.scene.physics.add.image(x*assetScale, y*assetScale,img)
            : game.add.image(x*assetScale, y*assetScale,img);
        asset.setDepth(z).setOrigin(0);
        if(attr.callback)  asset.setInteractive().on('pointerdown', ()=> attr.callback());
        if(attr.origin) asset.setOrigin(0.1,0.2);
        if(attr.alpha != undefined) asset.setAlpha(attr.alpha);
        if(attr.angularV) asset.setAngularVelocity(attr.angularV);
        if(attr.velocityX) asset.setVelocityX(attr.velocityX);
        asset.displayWidth *= scale;
        asset.displayHeight *= scale;
        return asset;
    },
    
};

export default img;
