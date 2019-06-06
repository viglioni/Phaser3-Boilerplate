const tweens = {
    changeAlpha : (target, duration, alpha, game) =>{
        return game.tweens.add({
            targets: target,
            duration: duration,
            alpha: alpha
        });
    },
};

export default tweens;
