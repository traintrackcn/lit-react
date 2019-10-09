import StateU from './state/C';

export default class{
    
    constructor(path){
        this._s;
        this.children = [];
        this.p = path;

        // console.log('u name ->', this.constructor.name);

        this._state = new StateU(path);
        this.push(this._state);
    }

    set s(value){
        this._s = value;
        this.children.forEach(child => {
            child.s = value;
        });
    }

    get s(){
        return this._s;
    }

    get(){
        return this._state.get();
    }

    set(value){
        this._state.set(value);
    }

    get_value(){
        return this._state.get_value();
    }

    set_value(value){
        this._state.set_value(value);
    }

    del_value(){
        this._state.del_value();
    }

    del(){
        this._state.del();
    }

    get_collection(){
        return this._state.get_collection();
    }

    set_collection(value){
        this._state.set_collection(value);
    }

    select(index){
        this._state.select(index);
    }

    get_selected_index(){
        return this._state.get_selected_index();
    }

    push(childU){
        this.children.push(childU);
    }

    get_custom_value(key){
        const state = this.get();
        return state.get(key);
    }

    set_custom_value(key, value){
        var state = this.get();
        state = state.set(key, value);
        this.set(state);
    }

    del_custom_value(key){
        var state = this.get();
        state = state.delete(key);
        this.set(state);
    }

}