import LITPath from "../LITPath";

//for test purpose

export class RootPath extends LITPath{
    constructor(path){
        super(path);
        this.property1 = this.path.concat(['property1']);
    }
}



export default new RootPath(['r']);