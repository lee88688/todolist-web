export function keyMissingWarning (id, key) {
  console.warn(`${id}: some key(${key}) is missing!`)
}

export class RefreshTimer {
  constructor (callback) {
    this._callback = callback
  }

  refresh (timeout) {
    this.clear()
    this._timeoutId = setTimeout(this._callback, timeout * 1000)
  }

  clear () {
    if (this._timeoutId) {
      console.log(`clear id ${this._timeoutId}`)
      clearTimeout(this._timeoutId)
    }
  }
}

export function removeArrayElement (array, callback) {
  const index = array.findIndex(callback)
  index >= 0 && array.splice(index, 1)
}

export function removeUndefinedKey (obj) {
  return Object.keys(obj).forEach(key => {
    obj[key] === undefined && (delete obj[key])
  })
}