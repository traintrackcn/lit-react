import CtxHandler from './CtxHandler';

export default class {

    constructor(ctx, extraCtx) {
        const h = this.getCtxHandler();
        h.set(ctx, extraCtx);
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
    getHandler() {
        const ctxH = this.getCtxHandler();
        return ctxH.getHandler();
    }

}