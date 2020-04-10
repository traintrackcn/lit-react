import _StateHandler from './_state/Handler';
import LITBaseHandler from '../LITBaseHandler';

export default class LITStateHandlerV2 extends LITBaseHandler{
    
    constructor(path, parent){
        super(path, parent);
    }

    get(){
        const h = this.getStateHandler();
        return h.get();
    }

    set(value){
        const h = this.getStateHandler();
        h.set(value);
    }

    del(){
        const h = this.getStateHandler();
        h.del();
    }

    getValue(){
        const h = this.getStateHandler();
        return h.get_value();
    }

    setValue(value) {
        const h = this.getStateHandler();
        h.set_value(value);
    }

    delValue() {
        const h = this.getStateHandler();
        h.del_value();
    }


    checkKey(key) {
        if (!key) throw new Error(`Cannot find key`);
        if (Array.isArray(key)) throw new Error(`Key should be string, current -> ${key}`);
    }

    getKey(key){
        try {
            this.checkKey(key);
            const h = this.getStateHandler();
            const state = h.get();
            // console.log('getKey state ->', key, state);
            return state.get(key);
        }catch(e) {
            throw e;
        }
    }

    setKey(key, value){
        try {
            this.checkKey(key);
            const h = this.getStateHandler();
            var state = h.get();
            // console.log('setKey state ->', key, value,state);
            state = state.set(key, value);
            this.set(state);
        }catch(e) {
            throw e;
        }
    }

    delKey(key){
        try {
            this.checkKey(key);
            const h = this.getStateHandler();
            var state = h.get();
            state = state.delete(key);
            this.set(state);
        }catch(e) {
            throw e;
        }
    }

    getCollection(){
        const h = this.getStateHandler();
        return h.get_collection();
    }

    setCollection(value){
        const h = this.getStateHandler();
        h.set_collection(value);
    }

    select(index){
        const h = this.getStateHandler();
        h.select(index);
    }

    getSelectedIndex(){
        const h = this.getStateHandler();
        return h.get_selected_index();
    }

    getStateHandler() {
        if (!this._state) {
            const path = this.getPath();
            this._state = new _StateHandler(path);
            this._state.s = this.getStateStore();
        }
        return this._state;
    }

}