import Handler from '.';
import s from '../s';
import p from './p';
import { fromJS } from 'immutable';

const h = new Handler(p.t);
h.s = s;

describe('test state handler', () => {


    it('test set_collection', () => {

        h.del();

        const collection = [
            'a', 'b', 'c'
        ];
        h.set_collection(fromJS(collection));
        expect(h.get()).toMatchSnapshot();
        h.select(1);
        expect(h.getValue()).toMatchSnapshot();

        expect(h.get()).toMatchSnapshot();
    });

    it('test getPath', () => {
        const expected = '["r","t"]';
        expect(JSON.stringify(h.getPath())).toBe(expected);
    })

    it('test set_value', () => {

        h.del();

        const value = { 'key': 'value' }
        h.setValue(value);
        expect(h.get()).toMatchSnapshot();
        expect(h.getValue()).toMatchSnapshot();
    });


    it('test s ops', () => {
        s.set(p.a, 'a');
        expect(s.get(p.a)).toMatchSnapshot();
        s.set(p.a, undefined);
        expect(s.get(p.a)).toBeFalsy();
    });


});


