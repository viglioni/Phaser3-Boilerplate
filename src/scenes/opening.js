import Phaser from 'phaser';
import constants from '../config/constants';
import utils from '../utils/utils';
import createScene from '../utils/create-scene'
import * as Assets from "../../assets/";
import {useState} from '../global-states'

const SceneExample = () =>{

    const sceneKey = "opening"
    const Scene =  createScene(sceneKey)
    const { game } = Scene

    const [clicks, setClicks] = useState('logoClicks', 0)
    
    const {loadAssets, loadingPage, addPic, changeAlpha, rand, randInt, wait, destroy, addTween, createText, changeText} = utils(game)

    const preload = () => {
        loadingPage()
        loadAssets(Assets)
    }
    
    const create =  () => {
        const counterStyle = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" }
        const clickCounter = createText(`clicks on logo: ${clicks.value}`, 0, 0, counterStyle, {z: 20})

        const phaserLogo = addPic('logo', 409, 0, {
            z: 10,
            onClick: async ()=> {
                await setClicks(clicks.value + 1)
               changeText(clickCounter, `clicks on logo: ${clicks.value}`)
            }
        })

        const {height} = constants()
        addTween({
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

export default SceneExample
