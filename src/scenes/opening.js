import Phaser from 'phaser';
import constants from '../config/constants';
import utils from '../utils/utils';
import createScene from '../utils/create-scene'
import * as Assets from "../../assets/";

const sceneTemplate = () =>{

    const sceneKey = "opening"
    const Scene =  createScene(sceneKey)
    const { game} = Scene
    const {loadAssets, loadingPage, addPic, changeAlpha, rand, randInt, wait, destroy} = utils(game)

    const preload = () => {
        loadingPage()
        loadAssets(Assets)
    }
    
    const create = () => {
        const phaserLogo = addPic('logo', 409, 0, {
            z: 10,
            callback: ()=> changeAlpha(phaserLogo, 300, rand(0.4,1))
        })

        const {height} = constants()
        game.tweens.add({
            targets: phaserLogo,
            y: height/2,
            duration: 2000,
            ease: 'Power2',
            yoyo: true,
            loop: -1
        })
    }

    const update = () => {
        const star = addPic('star', randInt(0,1200), randInt(0,675),{
            z: 1, scale: rand(0.5, 1)
        })

        wait( randInt(100, 10000) ,  destroy(star) )
    }

    Scene.setSceneFunctions(preload, create, update)
    return Scene
}

export default sceneTemplate
