class DynamicStorage {
    storage;

    constructor(props) {
        this.storage = {}
    }

    get(key) {
        const res = localStorage.getItem(key)

        this.storage[key] = res

        return res
    }

    getObj(key) {
        const obj = JSON.parse(localStorage.getItem(key))

        this.storage[key] = obj

        return this.proxify(obj, [key], new WeakMap())
    }

    set(key, item) {
        localStorage.setItem(key, item)

        this.storage[key] = item
    }

    setObj(key, item) {
        const str = JSON.stringify(item)

        localStorage.setItem(key, str)
        this.storage[key] = item;
    }

    value() {
        return new Proxy(this.storage, {
            get: (target, name) => {
                if (name === Symbol.toPrimitive) {
                    return target[name]
                }

                let val = this.storage[name]

                if (!val) {
                    try {
                        val = this.getObj(name)
                    } catch (e) {
                        val = this.get(name)
                    }
                }

                return val
            },
            set: (target, name, newValue) => {
                this.storage[name] = newValue
                if (typeof newValue === "object") {
                    this.setObj(name, newValue)
                } else {
                    this.set(name, newValue)
                }
            }
        })
    }

    proxify(data, path, seenObjects) {
        if (typeof data !== 'object' || data === null) {
            return data;
        }

        if (seenObjects.has(data)) {
            return seenObjects.get(data);
        }

        seenObjects.set(data, data);

        for (let key in data) {
            if (typeof data[key] === 'object' && data[key] !== null) {
                data[key] = this.proxify(data[key], [...path, key], seenObjects);
            }
        }

        return new Proxy(data, {
            get: (target, p) => {
                return target[p]
            },
            set: (target, p, newValue, receiver) => {
                const localStorageKey = path[0]
                let obj = JSON.parse(JSON.stringify(this.storage[localStorageKey]))
                this.setValueByPath(obj, [...path, p].slice(1), newValue)

                this.setObj(localStorageKey, obj)
                // console.log("set", target, p, path, newValue, receiver)
            }
        })
    }

    getValueByPath(obj, path) {
        return path.reduce((acc, key) => (acc && acc[key] !== 'undefined') ? acc[key] : undefined, obj);
    }

    setValueByPath(obj, path, value) {
        let current = obj;
        for (let i = 0; i < path.length - 1; i++) {
            current = current[path[i]];
            if (typeof current !== 'object' || current === null) {
                throw new Error(`Invalid path: ${path.slice(0, i + 1).join('.')}`);
            }
        }
        current[path[path.length - 1]] = value;
    }
}


module.exports = Storage