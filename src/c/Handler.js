import utils from './_utils';
import Node from './Node';

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

    get_raw_node(key){
        return this.map[key.value];
    }


    get_node(key){
        // var key = K.key;
        var cached = this.cache[key.value];
        if (cached) return cached;

        if (!this.map) return;

        const node = this.map[key.value];
        console.log('key ->', key.value, node);
        cached = new Node(node);

        //set to cache
        this.cache[key.value] = cached;

        return cached;
    }


}