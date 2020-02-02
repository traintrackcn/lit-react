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

    /**
     * @description get top handler
     */
    getHandler(fnName) {
        const ctxH = this.getCtxHandler();
        return ctxH.getHandler(fnName);
    }

}