

// Default size is 1200 x 675

const constants = (max = 1200) => {
    const iwidth = window.innerWidth;
    const iheight = window.innerHeight;

    const width = Math.min(max, Math.min(iwidth, Math.round(16*iheight/9)) );
    const height = Math.round(9*width/16);
    const scale = width/max;

    return {width, height, scale}
}

export default constants
