import LITBaseHandler from "../../LITBaseHandler";
import LITStateHandlerV2 from '../index_v2';
import p from './p';
import s from '../../s';
import LITComponentHandler from "../../LITComponentHandler";

export default class EntryHandler extends LITComponentHandler{

    constructor(ctx) {
        super(ctx);
        
    }

    getStateStore() {
        return s;
    }

    getH() {
        if (!this._h) {
            this._h = new LITStateHandlerV2(p.t, this);
        }
        return this._h;
    }
}