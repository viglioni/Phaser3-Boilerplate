import Phaser from 'phaser'
import nextScene from './next-scene'

export const createScene = (key) => {
     const Scene =  new class extends Phaser.Scene {
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

    return {
        Scene,
        game: Scene.game,
        nextScene: nextScene(Scene.game, key)
    }
}


