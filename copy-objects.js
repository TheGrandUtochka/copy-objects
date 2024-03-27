function deepClone(obj) {
    let clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      let value = obj[key];
      clone[key] = (value instanceof Object) ? deepClone(value) : value;
    }
    return clone;
  }