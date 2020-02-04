import LITPureComponent from "../../LITPureComponent";
import React from 'react';
import Handler from './Handler';
import { connect } from "react-redux";

export default class Root extends LITPureComponent {

    componentDidMount() {
        const h = this.getHandler();
        h.setProperty1('be cool');
    }

    render() {
        const h = this.getHandler();
        const StateListener = h.getStateListenerClass();
        console.log('Root render()');
        return (
            <div>
                hello world
                <StateListener />
            </div>
        );
    }

    getHandler() {
        if (!this._handler) {
            this._handler = new Handler(this);
        }
        return this._handler;
    }

}



// const getListenerClass = (h) => {

//     class Listener extends LITPureComponent{

//         componentDidUpdate() {
//             h.render();
//         }

//         render() {
//             console.log('render() detected ->', this.props.trigger);
//             return null
//         }
//     }

//     const mapStateToProps = (state, ownProps) => {
//         // console.log('mapStateToProps ->', JSON.stringify(state, null, 2));
//         const trigger = h.getTrigger();
//         // console.log('mapStateToProps trigger ->', trigger);
//         return {
//             trigger
//         };
//     };

//     return connect(
//         mapStateToProps
//     )(Listener);
// }


