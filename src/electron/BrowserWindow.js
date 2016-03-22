import { EventEmitter } from 'events';

export default class BrowserWindow extends EventEmitter {
  constructor(options) {
    super();

    this._p = {
      options,
      window: this._p_createWindow(options)
    };
  }

  _p_createWindow(options) {
    let _window;
    const { showIn, wrapper, style } = options.electronic;

    if (showIn && showIn === 'iframe') {
      _window = document.createElement('iframe');

      const _style = Object.assign({
        border: 'none',
        margin: 0,
        padding: 0,
      }, style);

      Object.keys(_style)
      .forEach(
        rule => _window.style[rule] = _style[rule]
      );

      if (wrapper) {
        document.querySelector(wrapper).appendChild(_window);
      }

    } else if (showIn && showIn === 'tab') {
      console.log('show in new tab');
    }

    return _window;
  }

  loadURL(url) {
    this._p.window.src = url;
  }

  close() {
    const { showIn, wrapper, style } = this._p.options.electronic;
    document.querySelector(wrapper).removeChild(this._p.window);
  }

  show() {}

  openDevTools() {
    return false;
  }
}
