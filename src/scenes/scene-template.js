import Phaser from 'phaser';
import Constants from '../config/constants';
import Utils from '../utils/utils';
import createScene from '../utils/create-scene'


const sceneTemplate = () =>{

    const sceneKey = "scene-key"

    const preload = () => {}

    const create = () => {}

    const update = () => {}

    return () => createScene(sceneKey, preload, create, update)
    
}

export default sceneTemplate
