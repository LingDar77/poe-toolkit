declare module '*.vue' {
  import { defineComponent } from 'vue'
  import { IpcRenderer } from "electron";
  const Component: ReturnType<typeof defineComponent>
  export interface IElectronAPI
  {
    minimize: () => void,
    maximize: (maximized:boolean) => void,
    close: () => void,
    maximized: (callback: (e: IpcRendererEvent, maximized: boolean) => void) => void,
    resize: (callback: (e: IpcRendererEvent, size: number[]) => void) => void,
    setAsTray: (callback: (e: IpcRendererEvent, setted: boolean) => void) => void,
    toggleDark: (isDark: boolean) => void,    
    toggledDark: (callback: (e: IpcRendererEvent, isDark: boolean) => void) => void,
    focusTray: (callback: () => void) => void,
  }

  declare global
  {
    interface Window
    {
      background: IElectronAPI
    }
  }
  export default Component
}