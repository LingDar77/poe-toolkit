
import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron";

contextBridge.exposeInMainWorld('background', {
    ipc: ipcRenderer,
    maximized: (callback: (e: IpcRendererEvent, maximized: boolean) => void) => { ipcRenderer.on('window.maximized', callback) },
    resize: (callback: (e: IpcRendererEvent, size:number[]) => void) => { ipcRenderer.on('window.resized', callback) },
})