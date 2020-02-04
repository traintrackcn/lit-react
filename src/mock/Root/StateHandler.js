import LITStateHandler from "../../LITStateHandler";
import s from '../../s';

export default class RootStateHandler extends LITStateHandler{
    
    constructor(ctx, extraCtx) {
        super(ctx, extraCtx);
        this.s = s;
    }

    setProperty1(value) {
        this.setKey(this.p.property1, value);
    }

    getProperty1() {
        return this.getKey(this.p.property1);
    }

}