import LITPath from './LITPath';

export default class LITCommonPath extends LITPath{
    constructor(path){
        super(path);
        // console.log('path -> '+this.path+' '+this.constructor.name);
        this.value = path.concat(['value']);
        this.index = path.concat(['index']);
        this.collection = path.concat(['collection']);
    }
}