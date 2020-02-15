import Renderer from 'react-test-renderer';
import React from 'react';
import App from '../__mock__/App';

it('', () => {

    const ref = (ref) => {  
        // expect(childH.getHandler()).toBe(h);
    };

    Renderer.create(
        <App ref={ref}/>
    );

});