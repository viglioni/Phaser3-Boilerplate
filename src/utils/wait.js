import Phaser from 'phaser';

const wait = {
    wait: (time, callback, that) =>{
        that.time.delayedCall(time, () => callback());
    }
};

export default wait;
