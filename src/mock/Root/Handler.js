import LITComponentHandler from '../../LITComponentHandler';
import StateHandler from './StateHandler';
import p from '../p';

export default class RootHandler extends LITComponentHandler {


    getStateListenerTarget() {
        return this.getProperty1();
    }

    setProperty1(value) {
        const h = this.getStateHandler();
        return h.setProperty1(value);
    }

    getProperty1() {
        const h = this.getStateHandler();
        return h.getProperty1();
    }

    getStateHandler() {
        if (!this._state) {
            this._state = new StateHandler(p, this);
        }
        return this._state;
    }

    getHandler() {
        return this;
    }

}