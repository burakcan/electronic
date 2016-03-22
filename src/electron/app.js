const eventRegistry = {}

function on(event, callback) {
  eventRegistry[`on_${event}`] = eventRegistry[`on_${event}`] || [];
  eventRegistry[`on_${event}`].push(callback);
}

document.addEventListener('readystatechange', (e) => {
  if (e.target.readyState !== 'complete') return false;

  eventRegistry['on_ready'] && eventRegistry['on_ready'].forEach(callback => {
    callback();
  });
});

export default {
  on
}
