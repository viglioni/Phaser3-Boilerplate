import Phaser from 'phaser';
import sceneManager from 'boilerplate/scene-manager'

const {createScene} = sceneManager

const SceneExample = () =>{

    const sceneKey = "scene-key-example"
    const {Scene, game, nextScene} =  createScene(sceneKey)

    
    const preload = () => {}
    
    const create =  () => {}

    const update = () => {}

    
    Scene.setSceneFunctions(preload, create, update)
    return Scene
}

export default SceneExample
