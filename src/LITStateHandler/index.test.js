
import TopHandler from './mock/TopHandler';
import LITStateHandlerV2 from './index_v2';
import LITStateHandler from '.';

describe('test state handler', () => {

    const clsArr = [LITStateHandlerV2, LITStateHandler];
    for (let index = 0; index < clsArr.length; index++) {
        const cls = clsArr[index];
        const topH = new TopHandler(null, null, cls);
        const h = topH.getH();
        const hName = h.getClassName();


        it(`test ${hName} setCollection`, () => {

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
    
        it(`test ${hName} getPath`, () => {
            const expected = '["r","t"]';
            expect(JSON.stringify(h.getPath())).toBe(expected);
        })
    
        it(`test ${hName} set_value`, () => {
    
            h.del();
    
            const value = { 'key': 'value' }
            h.setValue(value);
            expect(h.get()).toMatchSnapshot();
            expect(h.getValue()).toMatchSnapshot();
        });

        
    }


});



