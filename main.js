const {
    BrowserWindow,

    app
} = require('electron');

const {
    handleSquirrelEvent
} = require("./handleSquirrelEvent");

if (handleSquirrelEvent()) {
    // squirrel event handled and app will exit in 1000ms, so don't do anything else
    console.log('STOPPED!')
    return;
}

// const updater = require('update-electron-app');
const path = require('path');

// updater();


function createWindow() {
    const win = new BrowserWindow({
        width: 1400,
        height: 900,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        useContentSize: true
    });
    win.title = `Калькулятор жалюзёв <${app.getVersion()}>`
    return win
}

function openLink(w, h) {
    const aapp = new BrowserWindow({
        width: w,
        height: h,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    return aapp
}


app.whenReady().then(() => {
    createWindow().loadFile(path.join(__dirname, "apps/zcalc", "zindex.html"))
    // createWindow().loadFile("public/homepage.html")


})