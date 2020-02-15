import p from '../../__mock__/p';
import s from '../../s';
import LITStateHandlerV2 from '../index_v2';

export default class TopHandler extends LITStateHandlerV2{

    constructor(path, ctx, handlerClass) {
        super(path, ctx);

        this.setHandlerClass(handlerClass);
    }

    setHandlerClass(value) {
        this._handlerCls = value;
    }
    
    getHandlerClass() {
        return this._handlerCls;
    }

    getStateStore() {
        return s;
    }

    getH() {
        if (!this._h) {
            const Class = this.getHandlerClass();
            this._h = new Class(p.t, this);
        }
        return this._h;
    }
}