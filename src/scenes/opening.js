import Phaser from 'phaser';
import constants from '../config/constants';
import utils from '../utils/utils';
import createScene from '../utils/create-scene'
import * as Assets from "../../assets/";

const sceneTemplate = () =>{

    const sceneKey = "opening"
    const Scene =  createScene(sceneKey)
    const { game} = Scene
    const {loadAssets, loadingPage, addPic} = utils(game)

    const preload = () => {
        loadingPage()
        loadAssets(Assets)
    }
    
    const create = () => {
        const phaserLogo = addPic('logo', 409, 0, {
            z: 10,
            
        })

        const {height} = constants()
        game.tweens.add({
            targets: phaserLogo,
            y: height/3,
            duration: 1000,
            ease: 'Power2',
            yoyo: true,
            loop: -1
        })
    }

    const update = () => {}

    Scene.setSceneFunctions(preload, create, update)
    return Scene
}

export default sceneTemplate
