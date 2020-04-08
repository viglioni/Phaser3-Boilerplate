const nextScene = (game, actualKey) =>  (nextKey) => {
    game.scene.scene.stop(actualKey);
    game.scene.scene.stop(nextKey);
    game.scene.scene.start(nextKey);

}

export default nextScene
