import { fromJS } from "immutable";

export default class {

    constructor(path){
        this.p = path;
    }

    get(){

        if ( !this.s ) throw new Error('stateU.s not found, p -> '+JSON.stringify(this.p));
        if ( !this.p ) throw new Error('stateU.p not found');
        
        const state =  this.s.get(this.p);
        if (state) return state;

        // set init state
        this.set({});
        return this.s.get(this.p);
    }


    del() {
        this.s.del(this.p);
    }

    set(value){
        // console.log('this.p ->', this.p.path, 'value ->', value);
        this.s.set(this.p, value);
    }

    set_value(value){
        var state = this.get();
        state = state.set('value', fromJS(value));
        this.set(state);
    }

    del_value(){
        var state = this.get();
        state = state.delete('value');
        this.set(state);
    }

    get_value(){
        var state = this.get();
        if (!state) return;
        return state.get('value');
    }

    set_collection(value) {

        // console.log('value ->', value);

        var state = this.get();
        // console.log('state ->', state);
        state = state.set('collection', fromJS(value));
        // console.log('fromJS(state) ->', fromJS(state));
        this.set(state);
    }

    get_collection(){
        var state = this.get(); 
        return state.get('collection');
    }

    get_selected_index(){
        var state = this.get(); 
        return state.get('index');
    }

    select(index) {

        if (index === undefined) return;
        
        var state = this.get();
        const collection = this.get_collection();
        
        if(!collection) return;

        const value = collection.get(index);
        state = state.set('index', index);
        state = state.set('value', value);

        this.set(state);
    }

}