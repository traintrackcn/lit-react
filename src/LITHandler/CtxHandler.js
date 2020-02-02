import LITPath from "../LITPath";
import { PureComponent } from "react";

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

    isPath(ctx) {
        if (Array.isArray(ctx)) return true;
        if (ctx instanceof LITPath) return true;
        return false;
    }

    getPath() {
        const ctx = this.get();
        if (this.isPath(ctx)) return ctx;
        const reason = `Invalid path -> ${ctx}`;
        throw new Error(reason);
    }

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
        const ctx = this.get();
        const isPath = this.isPath(ctx);
        // console.log('isPath ->', isPath);
        if (isPath) {
            return this.getExtra();
        }
        return ctx
    }

    getComponent() {
        const item = this.getParentHandlerOrComponent();
        // console.log(`=== getComponent ${this.getDebugInfo(item)} ===`);
        if (item instanceof PureComponent) return item;
        if (item.getComponent) {
            const result = item.getComponent();
            if (result) return result;
        }

        const reason = `Invalid component -> ${ctx}`;
        throw new Error(reason);
    }

    getHandler() {

        const item = this.getParentHandlerOrComponent();
        // console.log(`=== getHandler ${this.getDebugInfo(item)} ===`);
        
        if (item.getHandler) {
            const result = item.getHandler();
            if (result) return result;
        }

        const reason = 'Invalid handler';
        throw Error(reason);

    }

}