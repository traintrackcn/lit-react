import LITPureComponent from './LITPureComponent';
import renderer from 'react-test-renderer';
import React from 'react';

it('test LITPureComponent', ()=> {
 
    const tree = renderer.create(<LITPureComponent />).toJSON();
    expect(tree).toMatchSnapshot();
});