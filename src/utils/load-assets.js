import {map, keys} from 'ramda'

const loadAssets = game => assets => {
    map(
        name => game.load.image(name, assets[name]),
        keys(assets))
}

export default loadAssets
