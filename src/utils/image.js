const  img = (game, assetScale) => {

    const add =  (img,x,y, attr, assetScale, physics) => {
        const z = attr.z || 1;
        const scale = attr.scale ? attr.scale*assetScale : assetScale;
        const asset = physics
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
    }

    const addPic = (asset, x , y, attr, physics=false) =>
          add(asset, x,y, {...attr}, assetScale, game,physics);

    return {add, addPic}
    
};

export default img;
