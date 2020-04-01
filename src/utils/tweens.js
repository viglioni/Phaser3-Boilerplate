const tweens = (game, defaultDuration) => {
    const changeAlpha = (target, duration = defaultDuration, alpha=1) =>
         game.tweens.add({
            targets: target,
            duration: duration,
             alpha: alpha});

    return {changeAlpha}
};

export default tweens;
