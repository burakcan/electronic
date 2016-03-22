import app from './app';
import ipcMain from './ipcMain';
import ipcRenderer from './ipcRenderer';
import BrowserWindow from './BrowserWindow';
import shell from './shell';
import dialog from './dialog';
import session from './session';

const electron = {
  app,
  ipcMain,
  ipcRenderer,
  BrowserWindow,
  shell,
  dialog,
  session,
}

electron.remote = electron;
module.exports = electron;
