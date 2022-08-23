'use strict'

import { app, protocol, BrowserWindow, ipcMain, } from 'electron'
import { Tray, nativeImage } from "electron";
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
import path from 'path'
const isDevelopment = process.env.NODE_ENV !== 'production'

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

function RegisterHandlers(mainWindow: BrowserWindow, trayWindow: BrowserWindow)
{
  ipcMain.on('window.minimize', () =>
  {
    mainWindow.minimize();
  });
  ipcMain.on('window.maximize', (e, maximized: boolean) =>
  {
    if (maximized)
      mainWindow.unmaximize()
    else
      mainWindow.maximize();
  });
  ipcMain.on('window.close', () =>
  {
    mainWindow.close();
  });
  mainWindow.on('maximize', () =>
  {
    mainWindow.webContents.send('window.maximized', true);
    mainWindow.webContents.send('window.resized', mainWindow.getSize());
  });
  mainWindow.on('unmaximize', () =>
  {
    mainWindow.webContents.send('window.maximized', false);
    mainWindow.webContents.send('window.resized', mainWindow.getSize());
  });
  mainWindow.on('resize', () =>
  {
    mainWindow.webContents.send('window.resized', mainWindow.getSize());
  });

  ipcMain.on('renderer.toggledDark', (e, isDark: boolean) =>
  {
    trayWindow.webContents.send('renderer.toggledDark', isDark);
  });
}

function BuildMenu(tray: Tray, window: BrowserWindow)
{
  const trayWindow = new BrowserWindow({
    width: 240,
    height: 400,
    frame: false,
    alwaysOnTop: true,
    show: false,
    resizable: false,
    hasShadow: true,
    parent: window,
    webPreferences: {

      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: (process.env
        .ELECTRON_NODE_INTEGRATION as unknown) as boolean,
      contextIsolation: !(process.env
        .ELECTRON_NODE_INTEGRATION as unknown) as boolean,
      preload: path.join(__dirname, 'preload.js'),
    }
  });
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    trayWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string)
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    trayWindow.loadURL('app://./index.html')
  }
  trayWindow.on('ready-to-show', () => { trayWindow.webContents.send('tray', true) })
  trayWindow.on('blur', () =>
  {
    //lose focus
    trayWindow.hide();

  })
  tray.addListener('right-click', (keyborad, rect) =>
  {
    // console.log(keyborad, rect);
    trayWindow.webContents.send('tray.focus');
    trayWindow.setPosition(rect.x - 240 + rect.width / 2, rect.y - 400 + rect.height / 2);
    trayWindow.show();
  });
  tray.addListener('double-click', () =>
  {
    window.show();
  })

  return trayWindow;
}

async function createWindow()
{
  let icon = nativeImage.createFromPath('src/assets/logo.ico');

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 600,
    minWidth: 800,
    frame: false,
    hasShadow: true,
    icon: icon,
    webPreferences: {

      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: (process.env
        .ELECTRON_NODE_INTEGRATION as unknown) as boolean,
      contextIsolation: !(process.env
        .ELECTRON_NODE_INTEGRATION as unknown) as boolean,
      preload: path.join(__dirname, 'preload.js'),
    }
  })

  mainWindow.on('ready-to-show', () => { mainWindow.webContents.send('tray', false) })

  let trayWindow = BuildMenu(new Tray(icon), mainWindow);

  RegisterHandlers(mainWindow, trayWindow);

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await mainWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string)
    if (!process.env.IS_TEST) mainWindow.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    mainWindow.loadURL('app://./index.html')
  }

}

// Quit when all windows are closed.
app.on('window-all-closed', () =>
{
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () =>
{
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () =>
{
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS3_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e)
    }
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) =>
    {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () =>
    {
      app.quit()
    })
  }
}
