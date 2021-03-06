import CtxHandler from './CtxHandler';
import Pool from '../Pool';

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

    getPath(key) {
        const ctxH = this.getCtxHandler();
        return ctxH.getPath(key);
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
        // console.log('this._store ->', this._store);
        if (this._store) return this._store;
        const ctxH = this.getCtxHandler();
        return ctxH.getStateStore();
    }

    //DEPRECATED
    get p() {
        return this.getPath();
    }

    //DEPRECATED
    get s() { 
        return this.getStateStore();
    }

    //DEPRECATED
    set s(value){
        this.setStateStore(value);
    }

    set(value) {
        this._raw = value;
    }

    get() {
        return this._raw;
    }

    /**
     * @description get top handler
     */
    getHandler(fnName) {
        const ctxH = this.getCtxHandler();
        return ctxH.getHandler(fnName);
    }


    pool(Class, param1, param2, param3) {
        const pool = this.getPool();
        return pool.get(Class, param1, param2, param3);
    }

    getPool() {
        if (!this._pool) {
            this._pool = new Pool();
        }
        return this._pool;
    }

}