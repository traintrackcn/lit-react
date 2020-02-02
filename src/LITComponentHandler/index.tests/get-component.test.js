import React from 'react';
import Renderer from 'react-test-renderer';
import TopComponent from './mock/TopComponent';


beforeAll(() => {
    console.log('beforeAll');
});

it('test get component from top handler', () => {

    const ref = (ref) => {
        const h = ref.getHandler();
        expect(h.getComponent()).toBeTruthy();
    };

    Renderer.create(
        <TopComponent ref={ref}/>
    );

});

it('test get component from child handler', () => {

    const ref = (ref) => {
        const h = ref.getHandler();
        const childComponentH = h.getChildComponentHandler();
        expect(childComponentH.getComponent()).toBeTruthy();
    };

    Renderer.create(
        <TopComponent ref={ref}/>
    );

})
