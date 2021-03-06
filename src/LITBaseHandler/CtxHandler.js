import LITPath from "../LITPath";
import { PureComponent } from "react";

export default class {

    // constructor() {
    //     this.getHandler = this.getHandler.bind(this);
    //     this._getHandler = this._getHandler.bind(this);
    // }

    set(ctx, extraCtx) {
        this._ctx = ctx;
        this._extraCtx = extraCtx;
    }

    get() { // can be related component, parent component, parent handler, path
        if (!this._ctx) {
            const reason = `Invalid handler ctx`;
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

    getPath(key) {
        const ctx = this.get();
        if (this.isPath(ctx)) {
            // console.log('getPath ctx ->', ctx, ' key ->', key);
            if (key) return ctx.concat([key]);
            return ctx;
        }
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

    getStateStore() {
        return this._getCustom('getStateStore', 'stateStore');
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

    getHandler(fnName) {
        if (!fnName) fnName = 'getHandler';
        return this._getCustom(fnName, 'handler');
    }

    // _getHandler(fnName) {
        
    //     const parent = this.getParentHandlerOrComponent();
    //     console.log(`=== search ${fnName} from parent -> ${this.getDebugInfo(parent)} ===`);
    //     var fn = parent[fnName];
    //     if (fn) {
    //         fn = fn.bind(parent);
    //         const result = fn();
    //         if (result) {
    //             console.log(`=== found handler -> ${result.constructor.name} ===`)
    //             return result;
    //         }
    //     }

    //     const reason = `Invalid handler via ${fnName}`;
    //     throw Error(reason);
    // }

    _getCustom(fnName, type) {
        const parent = this.getParentHandlerOrComponent();
        // console.log(`=== search ${fnName} from parent -> ${this.getDebugInfo(parent)} ===`);
        var fn = parent[fnName];
        if (fn) {
            fn = fn.bind(parent);
            const result = fn();
            if (result) {
                // console.log(`=== found ${fnName} -> ${result.constructor.name} ===`)
                return result;
            }
        }

        const reason = `Invalid ${fnName}`;
        throw Error(reason);
    }

}