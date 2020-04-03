const text = (game, assetScale) => {
    const createText = (textContent, x, y, textStyle, attr={}) => {
        const z = attr.z || 1
        const scale = attr.scale ? attr.scale*assetScale : assetScale
        const asset = game.add.text(x*scale, y*scale, textContent, textStyle)

        if(attr.callback)  asset.setInteractive().on('pointerd:callown', ()=> attr.callback());
        if(attr.origin) asset.setOrigin(0.1,0.2);
        if(attr.alpha != undefined) asset.setAlpha(attr.alpha);
        asset.displayWidth *= scale;
        asset.displayHeight *= scale;
        return asset;
    }

    const changeText = (textAsset, newText) => {
        textAsset.setText(newText)
    }

    return {createText, changeText}
}

export default text
