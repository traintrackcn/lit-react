import React, { PureComponent } from 'react';

export default class LITPureComponent extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
        this._mounted = false;
        this.unmounted = false;
    }

    componentWillMount(){
        this.onReceiveProps(this.props);
    }

    componentDidMount(){
        this._mounted = true;
    }

    componentWillUnmount(){
        this._mounted = false;
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