import LITPath from "../LITPath";

//for test purpose

export class RootPath extends LITPath{
    constructor(path){
        super(path);
        this.property1 = this.path.concat(['property1']);
        this.guest = new GuestPath(this.path.concat(['guest']));
        this.t = this.path.concat(['t']);
        this.a = this.path.concat(['a']);
    }
}


class GuestPath extends LITPath {
    constructor(path){
        super(path);
        this.email = this.path.concat(['email']);
    }
}


export default new RootPath(['r']);