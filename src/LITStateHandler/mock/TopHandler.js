import LITStateHandlerV2 from '../index_v2';
import p from './p';
import s from '../../s';

export default class TopHandler extends LITStateHandlerV2{

    constructor(ctx) {
        super(ctx);
        this.setStateStore(s);
    }

    // getStateStore() {
    //     return s;
    // }

    getH() {
        if (!this._h) {
            this._h = new LITStateHandlerV2(p.t, this);
        }
        return this._h;
    }
}