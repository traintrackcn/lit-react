import utils from './_utils';
import Node from './Node';
import Key from './Key';

export default class {

    constructor(){
        this.map = {};
        this.cache = {};
    }

    parse(data){
        this.map = utils.getTreeMap(data);
    }

    get(key, ctx){
        const node = this.get_node(key);
        return node.get(ctx);
    }

    get_k(key){
        var k;
        if (key && ( key instanceof Key)){
            k = key.value;
        }else{
            k = key;
        }
        return k;
    }   

    get_raw_node(key){

        const k = this.get_k(key);
        return this.map[k];
    }


    get_node(key){
        const k = this.get_k(key);
        var cached = this.cache[k];
        if (cached) return cached;

        if (!this.map) return;

        const node = this.map[k];
        console.log('key ->', k, node);
        cached = new Node(node);

        //set to cache
        this.cache[k] = cached;

        return cached;
    }


}