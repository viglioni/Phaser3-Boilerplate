const assets = (game) => {
    const setTint = (asset, color) => asset.setTint(color)

    const destroy =  asset => ()=> asset.destroy()
    
    return {setTint, destroy}
}

export default assets
