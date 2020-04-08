import Phaser from 'phaser';
import {createScene} from 'boilerplate/scene-manager'
import constants from 'boilerplate/game-size/constants'
import {useState} from 'boilerplate/global-states'
import utils from 'boilerplate/utils'


const GameOver = () =>{

    const sceneKey = "game-over"
    const {Scene, game} =  createScene(sceneKey)

    const  {createText, changeText} = utils(game)
    const {height, width} = constants()

    const [getClicks] = useState('logoClicks')
    
    const preload = () => {}
    
    const create =  () => {
        const gameOverStyle = { font: "bold 100px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" }

        createText(`Game Over`, width/2-100, height/2, gameOverStyle)

        const clicksStyle = { font: "bold 30px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" }

        createText(`You clicked ${getClicks()} times`, width/2+20, height/2+150, clicksStyle)        
        
    }

    const update = () => {}

    
    Scene.setSceneFunctions(preload, create, update)
    return Scene
}

export default GameOver
