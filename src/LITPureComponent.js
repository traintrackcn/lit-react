import React, { PureComponent } from 'react';

export default class LITPureComponent extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
        // this._mounted = false;
    }

    componentWillMount(){
        this.onReceiveProps(this.props);
    }

    navigate(route, params){
        this.props.navigation.navigate(route, params);
    }

    back() {
        this.props.navigation.goBack(null);
    }

    getNaviParam(key) {
        return this.props.navigation.getParam(key);
    }

    setNaviParams(params) {
        this.props.navigation.setParams(params);
    }

    //deprecated
    get_navi_param(key) {
        return this.getNaviParam(key);
    }

    //deprecated
    set_navi_params(params) {
        this.setNaviParams(params);
    }

    componentWillReceiveProps(nextProps){
        this.onReceiveProps(nextProps);
    }

    /**
     * @deprecated
     */
    onReceiveProps(props){
    }

    render() {
        return null;
    }


}