import Phaser from 'phaser';
import constants from '../config/constants';
import utils from '../utils';
import createScene from '../utils/create-scene'
import * as Assets from "../../assets/";
import {useState} from '../global-states'
import {length, range} from 'ramda'





const SceneExample = () =>{

    const sceneKey = "opening"
    const {Scene, game} =  createScene(sceneKey)

    const {loadAssets, loadingPage, addPic, changeAlpha, rand, randInt, wait, destroy, addTween, createText, changeText, setTint} = utils(game)
    
    const starColors= [ "0xff4000", "0xff00ff","0x00fff0","0x004fff","0xffff00"]

    const getRndStarColor = () => starColors[ randInt(0, length(starColors)-1)]


    const [getClicks, setClicks] = useState('logoClicks', 0)
    const [getStarColor, setStarColor] = useState('starColor', getRndStarColor())
    
    
    const preload = () => {
        loadingPage()
        loadAssets(Assets)
    }
    
    const create =  () => {
        const counterStyle = { font: "bold 52px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" }
        const clickCounter = createText(`clicks on logo: ${getClicks()}
star color: ${getStarColor()}`, 0, 0, counterStyle, {z: 20})

        const phaserLogo = addPic('logo', 409, 0, {
            z: 10,
            static: true,
            onClick: async ()=> {
                await setClicks(oldValue => oldValue + 1)
                await setStarColor( getRndStarColor() )
               changeText(clickCounter, `clicks on logo: ${getClicks()}
star color: ${getStarColor()}`)
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
        setTint(star, getStarColor())
        wait( randInt(100, 10000) ,  destroy(star) )
    }

    Scene.setSceneFunctions(preload, create, update)
    return Scene
}

export default SceneExample
