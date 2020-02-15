import LITComponentHandler from "../..";
import p from '../../../__mock__/p';
import StateHandler from './StateHandler';
import ComponentHandler from './ComponentHandler';
import CommonHandler from './CommonHandler';


export default class TopHandler extends LITComponentHandler {


    getChildStateHandlerWithArrayPath() {
        if (!this._state) {
            this._state = new StateHandler(p.t, this);
        }
        return this._state;
    }

    getChildStateHandlerWithObjectPath() {
        if(!this._state1) {
            this._state1 = new StateHandler(p, this);
        }
        return this._state1
    }

    

    getChildComponentHandler() {
        if (!this._component) {
            this._component = new ComponentHandler(this);
        }
        return this._component;
    }

    getChildHandler() {
        if (!this._common) {
            this._common = new CommonHandler(this);
        }
        return this._common;
    }

    getCustomHandler() {
        return 'ok';
    }

}