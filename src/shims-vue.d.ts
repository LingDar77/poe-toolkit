declare module '*.vue' {
  import { defineComponent } from 'vue'
  import { IpcRenderer } from "electron";
  const Component: ReturnType<typeof defineComponent>
  export interface IElectronAPI
  {
   ipc:IpcRenderer,
   resized: (callback: (e: IpcRendererEvent, maximized: boolean) => void) => void
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