import { fromJS } from 'immutable';

export default class LITStore {

    constructor(store, r){

        this.store = store;
        this.r = r;
        this.dispatch = this.dispatch.bind(this);
        this.getState = this.getState.bind(this);
        this.get = this.get.bind(this);
        this.set = this.set.bind(this);
        this.del = this.del.bind(this);

    }

    dispatch (action){
        return this.store.dispatch(action);
    }

    getState (){
        return this.store.getState();
    }

    get(path) {
        
        if (!path) throw new Error('path is unavailable');

        if (path.path) path = path.path;

        if (!(path instanceof Array)){
            let current = 'UNKNOWN';
            // console.log('path type -> '+path.prop.constructor);
            if (path.constructor) current = path.constructor.name;
            throw new Error('path should be array. current '+current);
        }

        const state = this.store.getState();
        return state.getIn(path);

    };
    
    set(path, value) {
        const r = this.r;
        if (!value) {
            this.del(path);
            return;
        } 
        if (!value.toJS) value = fromJS( value ); // if it's plain js object , convert it to immutable object first
        this.store.dispatch(r.SET(path, value));
        // console.log('dispatched r.SET ->', value);
    }
    
    del(path) {
        const r = this.r;
        this.store.dispatch(r.DELETE(path));
        console.log('dispatched r.DELETE');
    }
    
}