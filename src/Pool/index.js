export default class Pool {

    get(Class, param1, param2, param3) {
        if (!Class) throw new Error('Cannot getHandler, invalid Class');

        const className = Class.name;
        const key = `${className}`;

        const cached = this._get(key);
        if (cached) return cached;

        const obj = new Class(param1, param2, param3);
        this._set(key, obj);
        return obj;
    }

    _get(key) {
        const cache = this._getCache();
        return cache[key];
    }

    _set(key, value) {
        const cache = this._getCache();
        cache[key] = value;
    }

    _getCache() {
        if (!this._cache) {
            this._cache = {};
        }
        return this._cache;
    }

}