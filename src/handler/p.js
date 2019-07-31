import LITPath from "../LITPath";

//for test purpose

class C extends LITPath{
    constructor(path){
        super(path);
        this.t = this.path.concat(['t']);
    }
}

export default new C(['r']);