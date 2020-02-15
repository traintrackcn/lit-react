import LITPureComponent from '../LITPureComponent';
import { Provider } from 'react-redux';
import { store } from '../s';
import Root from './Root';
import React from 'react';

export default class extends LITPureComponent{

    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        );
    }
}



