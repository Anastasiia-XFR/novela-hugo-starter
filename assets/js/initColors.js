
let be = document.getElementsByTagName("BODY")[0];

initColors();

function initColors(){
    if (localStorage.getItem("isLight") === null) {
        localStorage.setItem("isLight", 'true');
    }

    if (localStorage.getItem("isLight") === 'false'){
        makeDark();
    }
    else{
        makeLight();
    }
}


function makeDark(){
    be.style.setProperty('--primary', "#fff");
    be.style.setProperty('--secondary', "#fff");
    be.style.setProperty('--grey', "#73737D");
    be.style.setProperty('--background-color', "radial-gradient(circle at left 50%, #172037, #172037, #172037, #000, #000) ");
    be.style.setProperty('--accent', "#E9DAAC");
    be.style.setProperty('--hover', "rgba(255, 255, 255, 0.07)");
    be.style.setProperty('--gradient', "linear-gradient(0deg, #172037, transparent)");
    be.style.setProperty('--articleText', "#fff");
    be.style.setProperty('--track', "rgba(255, 255, 255, 0.3)");
    be.style.setProperty('--progress', "#fff");
    be.style.setProperty('--card', "#1D2128");
    be.style.setProperty('--error', "#EE565B");
    be.style.setProperty('--success', "#46B17B");
    be.style.setProperty('--errorBackground', "rgba(238, 86, 91, 0.1)");
    be.style.setProperty('--horizontalRule', "rgba(255, 255, 255, 0.15)");
    be.style.setProperty('--inputBackground', "rgba(255, 255, 255, 0.07)");
    be.style.setProperty('--tooltip', "#000");
}

function makeLight(){
    be.style.setProperty('--primary', "#fff");
    be.style.setProperty('--secondary', "");
    be.style.setProperty('--grey', "#c0c7d8");
    be.style.setProperty('--background-color', "radial-gradient(circle at left 50%, #2d3a5c, #2d3a5c, #2d3a5c, #000, #000)");
    be.style.setProperty('--accent', "");
    be.style.setProperty('--hover', "");
    be.style.setProperty('--gradient', "linear-gradient(0, #000821, transparent)");
    be.style.setProperty('--articleText', "#fff");
    be.style.setProperty('--track', "");
    be.style.setProperty('--progress', "");
    be.style.setProperty('--card', "");
    be.style.setProperty('--error', "");
    be.style.setProperty('--success', "");
    be.style.setProperty('--errorBackground', "");
    be.style.setProperty('--horizontalRule', "");
    be.style.setProperty('--inputBackground', "");
    be.style.setProperty('--tooltip', "#172037");
}