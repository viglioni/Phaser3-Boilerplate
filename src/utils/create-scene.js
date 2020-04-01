import Phaser from 'phaser'

const createScene = (key) => {
     return new class extends Phaser.Scene {
        constructor(){
            super({key})
            this.game = this.sys
        }

         setSceneFunctions(preload, create, update){
             this.preload = preload
             this.create = create
             this.update = update
         }
    }
}

export default createScene
