import Phaser from 'phaser';
import constants from 'boilerplate/game-size/constants';
import utils from 'boilerplate/utils';
import sceneManager from 'boilerplate/scene-manager'
import * as Assets from "assets";
import {useState} from 'boilerplate/global-states'
import {length, range, keys} from 'ramda'


const {createScene} = sceneManager


const SceneExample = () =>{

    /*
     * Create the scene
     */
    const sceneKey = "opening"
    const {Scene, game, nextScene} =  createScene(sceneKey)

    /*
     * Get some phaser functions with syntax sugar
     */
    const {loadAssets, loadingPage, addPic, changeAlpha, rand, randInt, wait, destroy, addTween, createText, changeText, setTint} = utils(game)

    /*
     * Some aux functions to this scene
     */
    
    const starNames=  {"0xff4000" : "red", "0xff00ff" : "pink", "0x00fff0" : "green","0x004fff" : "blue","0xffff00" : "yellow"}
    const starColors = keys(starNames)
    const getRndStarColor = () => starColors[ randInt(0, length(starColors))]

    /*
     * States
     */    

    const [getClicks, setClicks] = useState('logoClicks', 0)
    const [getStarColor, setStarColor] = useState('starColor', getRndStarColor())

    /*
     * Phaser default functions: preload, create, update
     */
    
    const preload = () => {
        loadingPage()
        loadAssets(Assets)
    }
    
    const create =  () => {
        const counterStyle = { font: "bold 52px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" }
        const clickCounter = createText(`clicks on logo: ${getClicks()}
star color: ${starNames[getStarColor()]}`, 0, 0, counterStyle, {z: 20})

        const phaserLogo = addPic('logo', 409, 0, {
            z: 10,
            static: true,
            onClick: async ()=> {
                await setClicks(oldValue => oldValue + 1)
                await setStarColor( getRndStarColor() )
               changeText(clickCounter, `clicks on logo: ${getClicks()}
star color: ${starNames[getStarColor()]}`)
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

        if(getClicks() > 9) nextScene('game-over')
    }


    /*
     * Applying your functions to the scene
     */
    
    Scene.setSceneFunctions(preload, create, update)
    return Scene
}

export default SceneExample
