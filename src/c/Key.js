export default class {

    constructor(pValue, value){
        
        const list = [];
        if (pValue) list.push(pValue);
        if (value) list.push(value);

        if(list.length) this.value = list.join(',');
        
    }

    isEqual(anotherK){
        if (this.value && anotherK){
            if (this.value === anotherK.value) return true;
        }
        return false;
    }

}