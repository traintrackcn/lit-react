import LITBaseHandler from "../LITBaseHandler";
import { PureComponent } from "react";
import { connect } from "react-redux";

export default class LITComponentHandler extends LITBaseHandler{

    getProps() {
        try{
            const c = this.getComponent();
            return c.props;
        }catch(e) {
            throw e;
        }
    }

    getNavigation() {
        try{
            const props = this.getProps();
            return props.navigation;
        }catch(e){
            throw e;
        }
        
    }

    setState(value) {
        const c = this.getComponent();
        // console.log('c ->', c);
        c.setState(value);
    }

    async setStateAsync(value) {
        const c = this.getComponent();
        await c.setState(value);
    }

    getNewState() { // use this state to render component
        const seed = Math.random();
        return {seed};
    }

    getState() {
        const c = this.getComponent();
        return c.state;
    }

    initState(newState) {
        const c = this.getComponent();
        c.state = newState;
    }


    navigate(route, params){
        const navigation = this.getNavigation();
        navigation.navigate(route, params);
    }

    back() {
        const navigation = this.getNavigation();
        navigation.goBack(null);
    }

    getNaviParam(key) {
        const navigation = this.getNavigation();
        return navigation.getParam(key);
    }

    setNaviParams(params) {
        const navigation = this.getNavigation();
        navigation.setParams(params);
    }

    async setNaviParamsAsync(params) {
        const navigation = this.getNavigation();
        await navigation.setParams(params);
    }

    render(){ // setState to activate rendering
        const newState = this.getNewState();
        this.setState(newState);
    }

    async renderAsync(){
        const newState = this.getNewState();
        await this.setStateAsync(newState);
    }

    reRender() { // reset and render

    }

    getStateListenerTarget() {
        return;
    }

    getClassName() {
        try{
            return this.constructor.name;
        }catch(e) {
            return 'Invalid Class Name';
        }
    }

    getStateListenerClass() {
        if (!this._listener) {
            const h = this.getHandler();
            this._listener = this._getStateListenerClass(h);
        }
        return this._listener;
    }

    _getStateListenerClass(h) {

        class StateListener extends PureComponent{
    
            componentDidUpdate() {
                h.render();
            }
    
            render() {
                console.log(h.getClassName(), 'state listener detected target change');
                return null
            }

        }
    
        const mapStateToProps = () => {
            const target = h.getStateListenerTarget();
            return { target };
        };
    
        return connect(
            mapStateToProps
        )(StateListener);
        
    }

}