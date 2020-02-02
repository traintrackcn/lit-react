// import LITPath from "../LITPath";
import LITPureComponent from '../LITPureComponent';

export default class {

    set(ctx, extraCtx) {
        this._ctx = ctx;
        this._extraCtx = extraCtx;
    }

    get() { // can be related component, parent component, parent handler, path
        if (!this._ctx) {
            const reason = 'Invalid handler ctx';
            throw new Error(reason);
        }
        return this._ctx;
    }

    getExtra() { // for compatible with state handler purpose
        if (!this._extraCtx) {
            const reason = 'Invalid handler extra ctx';
            throw new Error(reason);
        }
        return this._extraCtx;
    }

    isPath() {
        const ctx = this.get();
        if (Array.isArray(ctx)) return true;
        return false;
    }

    getPath() {
        const ctx = this.get();
        if (this.isPath()) return ctx;
        const reason = `Invalid path -> ${ctx}`;
        throw new Error(reason);
    }

    // isComponent() {
    //     const ctx = this.get();
    //     if (ctx instanceof LITPureComponent) return true;
    //     return false;
    // }

    

    // getType() {
    //     if (this.isComponent()) {
    //         return 'Component';
    //     }else if (this.isPath()) {
    //         return 'Path';
    //     }else{
    //         return 'Handler';
    //     }
    // }

    getDebugInfo(item) {
        try{
            const result = item.constructor.name;
            // console.log('result ->', result);
            return result;
        }catch(e){
            // console.log('e ->', e);
            return item;
        }
    }

    getParentHandlerOrComponent() {
        if (this.isPath()) {
            return this.getExtra();
        }
        return this.get();
    }

    getComponent() {
        const item = this.getParentHandlerOrComponent();
        console.log(`=== getComponent ${this.getDebugInfo(item)} ===`);
        if (item instanceof LITPureComponent) return item;
        if (item) return item.getComponent();

        const reason = `Invalid component -> ${ctx}`;
        throw new Error(reason);
    }

    getHandler() {

        const item = this.getParentHandlerOrComponent();
        console.log(`=== getHandler ${this.getDebugInfo(item)} ===`);
        const result = item.getHandler();
        if (result) return result;

        const reason = 'Invalid handler';
        throw Error(reason);

    }

}