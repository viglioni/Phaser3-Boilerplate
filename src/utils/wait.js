/* wait
 * Executes a callback after time miliseconds
 * @param time (int) : time in miliseconds
 * @param callback (function)
 * @param game (Phaser.sys)
 * @return (void)
 */

const wait = {
    wait: (time, callback, game) =>{
        game.time.delayedCall(time, () => callback());
    }
};

export default wait;
