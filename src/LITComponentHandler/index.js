import LITHandler from "../LITHandler";

export default class extends LITHandler{

    constructor(component) {
        super(component)
    }

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

    reRender() { // reset and render

    }

}