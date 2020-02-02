import BaseComponent from './BaseComponent';
import React from 'react';
import TopHandler from './TopHandler';

export default class TopComponent extends BaseComponent {


    render() {
        return (
            <div>
                top component
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