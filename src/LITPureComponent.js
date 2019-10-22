import React, { PureComponent } from 'react';

export default class LITPureComponent extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
        this.mounted = false;
        this.unmounted = false;
        this.a = 'a';
    }

    componentDidMount(){
        this.mounted = true;
    }

    componentWillUnmount(){
        this.mounted = false;
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