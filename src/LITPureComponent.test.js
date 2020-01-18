import LITPureComponent from './LITPureComponent';
import renderer from 'react-test-renderer';
import React from 'react';



it('test child LITPureComponent', () => {

    class ChildComponent extends LITPureComponent{
        constructor(){
            super();
            console.log('_mounted ->', this._mounted);
        }
    }

    new ChildComponent();
});



