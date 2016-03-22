import { EventEmitter } from 'events';
import wormhole from 'wormhole.js';
import ipcRenderer from './ipcRenderer';

class IpcMain extends EventEmitter {
  constructor() {
    super();

    wormhole().on('IpcRenderer', (timestamp, [topic, message]) => {
      this.emit(topic, {
        sender: {
          send: (topic, message) => {
            wormhole().emit('IpcMain', [Date.now(), [topic, message]]);
          },
        },
      }, message);
    });
  }
}

export default new IpcMain();
