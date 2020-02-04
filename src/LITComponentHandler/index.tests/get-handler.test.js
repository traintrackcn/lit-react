import Renderer from 'react-test-renderer';
import React from 'react';
import StateHandler from './mock/StateHandler';
import TopComponent from './mock/TopComponent';
import TopHandler from './mock/TopHandler';
it('test get handler from child state handler', () => {
    const ref = (ref) => {
        const h = ref.getHandler();
        const childHWithArrayPath = h.getChildStateHandlerWithArrayPath();
        const childHWithObjectPath = h.getChildStateHandlerWithObjectPath();

        expect(childHWithArrayPath.getHandler()).toBe(h);
        expect(childHWithObjectPath.getHandler()).toBe(h);
        expect(childHWithObjectPath.p).toBeTruthy();
    
    };

    Renderer.create(
        <TopComponent ref={ref}/>
    );

});

it('test get handler from child component handler', () => {
    const ref = (ref) => {
        const h = ref.getHandler();        
        const childH = h.getChildComponentHandler();        
        expect(childH.getHandler()).toBe(h);
    };

    Renderer.create(
        <TopComponent ref={ref}/>
    );
})

it('test get handler from child common handler', () => {
    const ref = (ref) => {
        const h = ref.getHandler();        const childComponentH = h.getChildComponentHandler();
        const childH = h.getChildHandler();
        expect(childH.getHandler()).toBe(h);
    };

    Renderer.create(
        <TopComponent ref={ref}/>
    );

});

it('test get custom handler from child handler', () => {
    const h = new TopHandler();
    const childH = h.getChildHandler();
    expect(childH.getCustomHandler()).toBe('ok');
});


it('test state handler without path', () => {
    const h = new StateHandler();
    expect(h).toBe(h);
})