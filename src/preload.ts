
import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron";

contextBridge.exposeInMainWorld('background', {
    minimize: () => { ipcRenderer.send('window.minimize'); },
    maximize: (maximized: boolean) => { ipcRenderer.send('window.maximize', maximized); },
    close: () => { ipcRenderer.send('window.close'); },
    maximized: (callback: (e: IpcRendererEvent, maximized: boolean) => void) => { ipcRenderer.on('window.maximized', callback); },
    resize: (callback: (e: IpcRendererEvent, size: number[]) => void) => { ipcRenderer.on('window.resized', callback); },
    setAsTray: (callback: (e: IpcRendererEvent, setted: boolean) => void) => { ipcRenderer.on('tray', callback); },
    toggleDark: (isDark: boolean) => { ipcRenderer.send('renderer.toggleDark', isDark); },
    toggledDark: (callback: (e: IpcRendererEvent, isDark: boolean) => void) => { ipcRenderer.on('renderer.toggledDark', callback); },
    focusTray: (callback: () => void) => { ipcRenderer.on('tray.focus', callback) },
})