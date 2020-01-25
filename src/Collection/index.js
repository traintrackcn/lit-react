export default class {

    constructor(keyToArray){
        this.keyToArray = keyToArray;
        this.reset();
    }

    set(key, value) {
        
        if (this.keyToArray){
            this._push(key, value);
            return;
        }

        this.data[key] = value;
    }

    _push(key, value) {
        const values = this.data[key];
        if (!values) {
            this.data[key] = []; // create empty array for key
            this._push(key, value);
            return;
        }
        values.push(value);
    }

    get(key) {
        return this.data[key];
    }

    get_values(){
        return Object.values(this.data);
    }

    getValues() {
        return this.get_values();
    }

    getSize() {
        const values = this.getValues();
        return values.length;
    }

    getData() {
        return this.data;
    }

    reset() {
        this.data = {};
    }

}