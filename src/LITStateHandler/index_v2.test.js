import EntryHandler from './mock/EntryHandler';
import TopHandler from './mock/TopHandler';

// h.setStateStore(s);
const topH = new TopHandler();
const h = topH.getH();


describe('test state handler', () => {

    it('test setCollection', () => {

        h.del();

        const collection = [
            'a', 'b', 'c'
        ];
        h.setCollection(collection);
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


});



