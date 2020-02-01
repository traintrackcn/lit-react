import LITPath from "../LITPath";

//for test purpose

export class RootPath extends LITPath{
    constructor(path){
        super(path);
        this.t = this.path.concat(['t']);
        this.a = this.path.concat(['a']);
    }
}



export default new RootPath(['r']);