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

    getKey(key){
        const h = this.getStateHandler();
        const state = h.get();
        console.log('getKey state ->', key, state);
        return state.getIn(key);
    }

    setKey(key, value){
        const h = this.getStateHandler();
        var state = h.get();
        console.log('setKey state ->', key, value,state);
        state = state.setIn(key, value);
        this.set(state);
    }

    delKey(key){
        const h = this.getStateHandler();
        var state = h.get();
        state = state.deleteIn(key);
        this.set(state);
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