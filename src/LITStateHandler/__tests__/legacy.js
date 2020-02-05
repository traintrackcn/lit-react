import LITStateHandler from "..";
import LITStateHandlerV2 from '../index_v2';
import p from '../mock/p';
import s from '../../s';

it('test pattern 1, create child handlers in constructor', () => {
    const h = new TopHandlerPattern1(p);
    h.s = s;

    const h1 = h.h1;
    expect(h1.getStateStore()).toBeTruthy();
    expect(h1.s).toBeTruthy();

    const h2 = h.h2;
    expect(h2.getStateStore()).toBeTruthy();
    expect(h2.s).toBeTruthy();
});


it('test parttern 2, use "getXXX" to create child handlers' , () => {
    const h = new TopHandlerPattern2(p);

    const h1 = h.getH1();
    expect(h1.s).toBeTruthy();
    expect(h1.getStateStore()).toBeTruthy();

    const h2 = h.getH2();
    expect(h2.s).toBeTruthy();
    expect(h2.getStateStore()).toBeTruthy();
});




class TopHandlerPattern1 extends LITStateHandler {
    constructor(path) {
        super(path);

        this.h1 = new LITStateHandler(this.p.a);
        this.push(this.h1);

        this.h2 = new LITStateHandlerV2(this.p.a);
        this.push(this.h2);
    }

}

class TopHandlerPattern2 extends LITStateHandlerV2 {

    constructor(path, ctx) {
        super(path, ctx);
    }

    getStateStore() {
        return s;
    }

    getH1() {
        if (!this._h1) {
            const p = this.getPath();
            this._h1 = new LITStateHandler(p.a, this);
        }
        return this._h1;
    }

    getH2() {
        if (!this._h2) {
            const p = this.getPath();
            this._h2 = new LITStateHandlerV2(p.a, this);
        }
        return this._h2;
    }


}