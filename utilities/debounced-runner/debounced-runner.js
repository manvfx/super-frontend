

const debounceBag = {};

export function runDebounced(key, timeout, task) {
  clearTimeout(debounceBag[key]);
  debounceBag[key] = setTimeout(task, timeout);
}
