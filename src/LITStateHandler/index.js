import _StateHandler from './_state/Handler';
import LITBaseHandler from '../LITBaseHandler';

export default class LITStateHandler extends LITBaseHandler{
    
    constructor(path, ctx){
        super(path, ctx);
        this.setupPath();
    }

    setupPath() {
        try{
            this.p = this.getPath();
        }catch(e){
            
        }
    }

    getStateHandler() {
        if (!this._state) {
            const path = this.getPath();
            this._state = new _StateHandler(path);
            this.push(this._state);
        }
        return this._state;
    }

    getChildren() {
        if (!this._children) {
            this._children = [];
        }
        return this._children;
    }

    push(childH){
        const children = this.getChildren();
        children.push(childH);
        if (this.s) childH.s = this.s;
    }

    set s(value){
        this._s = value;
        const children = this.getChildren();
        children.forEach(child => {
            child.s = value;
        });
    }

    get s(){
        return this.getStateStore();
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
        return state.get(key);
    }

    setKey(key, value){
        const h = this.getStateHandler();
        var state = h.get();
        state = state.set(key, value);
        this.set(state);
    }

    delKey(key){
        const h = this.getStateHandler();
        var state = h.get();
        state = state.delete(key);
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






















    /**
     * @deprecated
     */
    get_value(){
        return this.getValue();
    }

    /**
     * @deprecated
     */
    set_value(value){
        this.setValue(value);
    }

    /**
     * @deprecated
     */
    del_value(){
        this.delValue();
    }

    /**
     * @deprecated
     */
    get_collection(){
        return this.getCollection();
    }

    /**
     * @deprecated
     */
    set_collection(value){
        this.setCollection(value);
    }

    /**
     * @deprecated
     */
    get_selected_index(){
        return this._state.get_selected_index();
    }

    /**
     * @deprecated
     */
    get_custom_value(key){
        const h = this.getStateHandler();
        const state = h.get();
        return state.get(key);
    }

    /**
     * @deprecated
     */
    set_custom_value(key, value){
        const h = this.getStateHandler();
        var state = h.get();
        state = state.set(key, value);
        this.set(state);
    }

    /**
     * @deprecated
     */
    del_custom_value(key){
        const h = this.getStateHandler();
        var state = h.get();
        state = state.delete(key);
        this.set(state);
    }

}