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

    // componentDidMount(){
    //     this._mounted = true;
    // }

    // componentWillUnmount(){
    //     this._mounted = false;
    // }

    navigate(route, params){
        this.props.navigation.navigate(route, params);
    }

    back() {
        this.props.navigation.goBack(null);
    }

    get_navi_param(key) {
        return this.props.navigation.getParam(key);
    }

    set_navi_params(params) {
        this.props.navigation.setParams(params);
    }

    tryComponentWillMount(){
        
    }

    componentWillReceiveProps(nextProps){
        this.onReceiveProps(nextProps);
    }

    onReceiveProps(props){
        try{
            return this.tryOnReceiveProps(props);
        }catch(e){
            return null;
        }
    }

    tryOnReceiveProps(props){

    }

    render(){
        try{
            return this.tryRender();
        }catch(e){
            return null;
        }
    }

    tryRender(){
        return null;
    }

}