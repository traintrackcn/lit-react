import LITHandler from './index';
import LITBaseHandler from './index';
import p from '../__mock__/p';

describe('test handler', () => {

    it('test handler21', () => {
        const h = new TopHandler();
        const h2 = h.getChildHandler2(); 
        const h21 = h2.getChildHandler1(); 

        const result = h21.getHandler();
        expect(result).toBe(h);
    });

    it('test handler11', () => {
        const h = new TopHandler();
        const h1 = h.getChildHandler1(); 
        const h11 = h1.getChildHandler1(); 

        const result = h11.getHandler();
        expect(result).toBe(h);
    });


    

});




class TopHandler extends LITHandler {

    constructor() {
        super();
    }

    getChildHandler1() {
        if (!this._h1) {
            this._h1 = new ChildHandler1(this);
        }
        return this._h1;
    }

    getChildHandler2() {
        if (!this._h2) {
            this._h2 = new ChildHandler2(this);
        }
        return this._h2;
    }

    getHandler() {
        return this;
    }

}

class ChildHandler1 extends LITHandler {
    getChildHandler1() {
        if (!this._h1) {
            this._h1 = new LITHandler(this);
        }
        return this._h1;
    }
}

class ChildHandler2 extends LITHandler {

    getChildHandler1() {
        if (!this._h1) {
            this._h1 = new LITHandler(this);
        }
        return this._h1;
    }

}

