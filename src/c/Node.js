import utils from './_util';

export default class {

    constructor(raw){

        // console.log('raw -> '+JSON.stringify(raw, null, 2));
        
        // this.raw = raw;
        this.title = raw.title;
        this.description = raw.description;
        this.active = raw.active?raw.active: false;
        this.children = raw.children;
        // this.rules = raw.r;
        const rules = raw.r;
        this.base = this.searchBase(rules);
        this.rules = this.sort(rules);

        // console.log('active -> '+JSON.stringify(this.active, null, 2));
        // console.log('description -> '+this.description);
        // console.log('base -> '+JSON.stringify(this.base, null, 2));
        // console.log('rules -> '+JSON.stringify(this.rules, null, 2));

    }

    

    searchBase(rules){
        if (!rules) return;
        var found =  rules.find(rule => {
            return !rule._;
        });
        if(!this.active && found) {
            delete found['on']; // delete 'on' if node has not been activated
        }
        return found;
    }

    sort(rules){

        if (!rules) return;

        rules.sort((a, b) => { // sort rules
            if (!a._ && !b._) return 1;
            if (!a._) return -1;
            if (!b._) return 1;
            return a._.length - b._.length;
        });

        return rules;
    }


    get(ctx) {
    
        if (!ctx || !this.rules){
            console.warn('Invalid context found');
            return this.base;
        }

        var result = Object.assign({}, this.base);

        this.rules.forEach(rule => {
    
            if (!rule._) return; //skip base ( in case two or more base rules )
    
            // console.log('ctx -> '+JSON.stringify(ctx));
            // console.log('rule._ -> '+JSON.stringify(rule._));
    
            if (utils.arrayContainsArray1( ctx, rule._) ){
                result = Object.assign(result, rule);
            }
    
        });

    
        delete result['_']; //remove rule
        result.ctx = ctx; //set current conditions to result

        // delete 'on' if node has not been activated
        if (!this.active) {
            delete result['on']; 
        }
        
        // console.log('rules -> '+JSON.stringify(rules));
        return result;
    
    }

    
}