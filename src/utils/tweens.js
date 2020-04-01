const tweens = (game, defaultDuration) => {

    const addGenericTween = (config) => game.tweens.add(config)

    
    const changeAlpha = (target, duration = defaultDuration, alpha=1) =>
         addGenericTween({
            targets: target,
            duration: duration,
             alpha: alpha});

    

    return {changeAlpha, addTween: addGenericTween}
};

export default tweens;
