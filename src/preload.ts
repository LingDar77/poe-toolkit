
import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron";

contextBridge.exposeInMainWorld('background', {
    ipc: ipcRenderer,
    resized: (callback: (e: IpcRendererEvent, maximized: boolean) => void) => { ipcRenderer.on('window.resized', callback) },
})