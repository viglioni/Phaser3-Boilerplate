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
    
    const {loadAssets, loadingPage, addPic, changeAlpha, rand, randInt, wait, destroy, addTween} = utils(game)

    const preload = () => {
        loadingPage()
        loadAssets(Assets)
    }
    
    const create =  () => {

        const text = game.add.text(0, 0, `clicks on logo: ${clicks.value}`,
                                   { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
        text.setDepth(20)

        const phaserLogo = addPic('logo', 409, 0, {
            z: 10,
            callback: async ()=> {
                await setClicks(clicks.value + 1)
                text.setText(`clicks on logo: ${clicks.value}`)
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

    let n = {value: -1}
    const update = () => {
        const star = addPic('star', randInt(0,1200), randInt(0,675),{
            z: 1, scale: rand(0.5, 1)
        })

        wait( randInt(100, 10000) ,  destroy(star) )
        if(n.value !== clicks.value) console.log(clicks)
        n.value = clicks.value
        
    }

    Scene.setSceneFunctions(preload, create, update)
    return Scene
}

export default SceneExample
