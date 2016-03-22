import { EventEmitter } from 'events';
import wormhole from 'wormhole.js';

class IpcRenderer extends EventEmitter {
  constructor() {
    super();

    wormhole().on('IpcMain', (timestamp, [topic, message]) => {
      this.emit(topic, {}, message);
    });

  }

  send() {
    wormhole().emit(
      'IpcRenderer',
      [Date.now(), Array.from(arguments)]
    );
  }
}

export default new IpcRenderer();
