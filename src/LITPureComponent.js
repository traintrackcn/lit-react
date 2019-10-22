import React, { PureComponent } from 'react';

export default class LITPureComponent extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    get_unmounted(){
        return this.unmounted;
    }

    componentWillUnmount(){
        this.unmounted = true;
    }

    componentWillMount(){
        this.onReceiveProps(this.props);
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