const loadingPage = (game, constants) => () => {

    const {width, height, assetScale} = constants()
    const center = {
        width: width/2,
        height: height/2
    };
    
    const progressBar = game.add.graphics();
    const progressBox = game.add.graphics();
    const loadingText = game.make.text({
        x: width / 2,
        y: height / 2 - 50,
        text: 'Loading...',
        style: {
            font: '20px monospace',
            fill: '#ffffff'
        }
    });

    const percentText = game.make.text({
        x: width / 2,
        y: height / 2 - 5,
        text: '0%',
        style: {
            font: '18px monospace',
            fill: '#ffffff'
        }
    });

    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(center.width -300*assetScale, center.height -50*assetScale, 600*assetScale, 100*assetScale);
    percentText.setOrigin(0.5, 0.5);
    loadingText.setOrigin(0.5, 0.5);

    
    game.load.on('progress',  (value) => {
        progressBar.clear();
        progressBar.fillStyle(0xffffff, 1);
        progressBar.fillRect(center.width -300*assetScale, center.height -50*assetScale, 600*assetScale*value, 100*assetScale);
        percentText.setText(parseInt(value * 100) + '%');
    });
    
    game.load.on('complete',  () => {
        progressBar.destroy();
        progressBox.destroy();
        loadingText.destroy();
        percentText.destroy();
    });
}

export default loadingPage
