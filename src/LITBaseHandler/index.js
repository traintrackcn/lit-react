import CtxHandler from './CtxHandler';

export default class LITBaseHandler {

    constructor(ctx, extraCtx) {
        const h = this.getCtxHandler();
        h.set(ctx, extraCtx);

        this.className = this.constructor.name;
    }

    getCtxHandler() {
        if (!this._ctx) {
            this._ctx = new CtxHandler();
        }
        return this._ctx;
    }

    getPath() {
        const ctxH = this.getCtxHandler();
        return ctxH.getPath();
    }

    getComponent() {
        const ctxH = this.getCtxHandler();
        return ctxH.getComponent();
    }

    getClassName() {
        try{
            return this.constructor.name;
        }catch(e){
            return this;
        }
    }

    setStateStore(value) {
        this._store = value;
    }

    getStateStore() {
        if (this._store) return this._store;
        const ctxH = this.getCtxHandler();
        return ctxH.getStateStore();
    }

    /**
     * @description get top handler
     */
    getHandler(fnName) {
        const ctxH = this.getCtxHandler();
        return ctxH.getHandler(fnName);
    }

}