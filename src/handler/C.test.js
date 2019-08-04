import StateU from './C';
import s from '../s';
import p from './p';
import { fromJS } from 'immutable';

const stateU = new StateU(p.t);
stateU.s = s;

describe('', () => {


    it('test set_collection', () => {

        stateU.del();

        const collection = [
            'a', 'b', 'c'
        ];
        stateU.set_collection(fromJS(collection));
        expect(stateU.get()).toMatchSnapshot();
        stateU.select(1);
        expect(stateU.get_value()).toMatchSnapshot();

        expect(stateU.get()).toMatchSnapshot();
    });

    it('test set_value', () => {

        stateU.del();

        const value = { 'key': 'value' }
        stateU.set_value(value);
        expect(stateU.get()).toMatchSnapshot();
        expect(stateU.get_value()).toMatchSnapshot();
    });


    it('test s ops', () => {
        s.set(p.a, 'a');
        expect(s.get(p.a)).toMatchSnapshot();
        s.set(p.a, undefined);
        expect(s.get(p.a)).toBeFalsy();
    });


});