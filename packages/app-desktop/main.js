const { app, BrowserWindow } = require('electron')

const PORT = 8000

const server = require('app-server')({
  port: PORT,
})

let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })

  mainWindow.loadURL(`http://localhost:${PORT}`)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

setTimeout(() => {
  if (app.isReady()) {
    createWindow()
  } else {
    app.on('ready', createWindow)
  }
}, 1000)

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

app.on('quit', () => {
  appServer.stop()
})
