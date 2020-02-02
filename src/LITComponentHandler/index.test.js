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
            const childStateHWithArrayPath = h.getChildStateHandlerWithArrayPath();
            const childStateHWithObjectPath = h.getChildStateHandlerWithObjectPath();
            const stateHWithoutPath = new StateHandler();
            const childComponentH = h.getChildComponentHandler();
            const childH = h.getChildHandler();

            expect(childStateHWithArrayPath.getHandler()).toBe(h);
            expect(childStateHWithObjectPath.getHandler()).toBe(h);
            // expect(childStateHWithObjectPath.p).toBe();
            expect(stateHWithoutPath).toBe(stateHWithoutPath);
            expect(childComponentH.getHandler()).toBe(h);
            expect(childH.getHandler()).toBe(h);
        
        };

        Renderer.create(
            <TestComponent ref={refComponent}/>
        );


    });

    it('test getComponent()', () => {
        const refComponent = (ref) => {
            const h = ref.getHandler();
            const c = h.getComponent();
            // console.log('component ->', c.componentDidMount);
            expect(c).toBeTruthy();
        };

        Renderer.create(
            <TestComponent ref={refComponent}/>
        );

    });

});

class BaseComponent extends LITPureComponent {

}

class TestComponent extends BaseComponent {


    render() {
        console.log('render');
        return (
            <div>
                test
            </div>
        )
    }

    getHandler() {
        if (!this._handler) {
            this._handler = new TopHandler(this);
        }
        return this._handler;
    }

}



class TopHandler extends LITComponentHandler {


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

}




class StateHandler extends LITStateHandler{

}

class ComponentHandler extends LITComponentHandler{

}

class CommonHandler extends LITHandler {

}