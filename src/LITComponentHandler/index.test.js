import React from 'react';
import LITPureComponent from '../LITPureComponent';
import LITComponentHandler from '.';
import LITStateHandler from '../LITStateHandler';
import LITHandler from '../LITHandler';
import Renderer from 'react-test-renderer';
import p from '../LITStateHandler/p';

describe('test component handler', () => {

    it('test getHandler()', () => {
        const refComponent = (ref) => {
            const h = ref.getHandler();
            const childStateH = h.getChildStateHandler();
            const childComponentH = h.getChildComponentHandler();
            const childH = h.getChildHandler();

            expect(childStateH.getHandler()).toBe(h);
            expect(childComponentH.getHandler()).toBe(h);
            expect(childH.getHandler()).toBe(h);
        
        };

        Renderer.create(
            <TestComponent ref={refComponent}/>
        );


    });

});

class TestComponent extends LITPureComponent {

    componentDidMount() {
        console.log('componentDidMount');
    }

    getHandler() {
        if (!this._handler) {
            this._handler = new TopHandler(this);
        }
        return this._handler;
    }

    render() {
        console.log('render');
        return (
            <div>
                test
            </div>
        )
    }

}

class TopHandler extends LITComponentHandler {

    getChildStateHandler() {
        if (!this._state) {
            this._state = new StateHandler(p.t, this);
        }
        return this._state;
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

}

class StateHandler extends LITStateHandler{

}

class ComponentHandler extends LITComponentHandler{

}

class CommonHandler extends LITHandler {

}