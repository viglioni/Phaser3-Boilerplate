import Phaser from 'phaser';
import createScene from '../utils/create-scene'



const SceneExample = () =>{

    const sceneKey = "scene-key-example"
    const {Scene, game} =  createScene(sceneKey)

    
    const preload = () => {}
    
    const create =  () => {}

    const update = () => {}

    
    Scene.setSceneFunctions(preload, create, update)
    return Scene
}

export default SceneExample
