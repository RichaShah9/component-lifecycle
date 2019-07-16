import React, { Component } from 'react';
import { ControlLabel } from 'react-bootstrap';
import Pass from './Pass';
import Fail from './Fail';

export default class SinglePlayer extends Component {
    constructor(props) {
        super(props);
        this.state = { isPassed: false }
    }

    componentWillMount() {
        // Mark it as 'Pass' if score >= 60
        this.setState({
            isPassed: this.props.score >= 60
        });

        console.log('componentWillMount => ' + this.props.name);
        //alert('componentWillMount => ' + this.props.name);
    }
    componentDidMount() {

        console.log('componentDidMount => ' + this.props.name);
        //alert('componentDidMount => ' + this.props.name);
    }
    componentWillReceiveProps(nextProps) {
        // Calculate state according to props changes
        this.setState({
            isPassed: nextProps.score >= 60
        });

        console.log('componentWillReceiveProps => ' + this.props.name + ': ' + nextProps.score+' Passed: '+this.state.isPassed);
        alert('componentWillReceiveProps => ' + this.props.name + ': ' + nextProps.score);
    }
    shouldComponentUpdate(nextProps, nextState) {
        // Don't rerender if score doesn't change,
        if ( nextProps.score === this.props.score ) {
            console.log('shouldComponentUpdate => ' + this.props.name + '? false');
            alert('shouldComponentUpdate => ' + this.props.name + '? false');
            return false;
        }
        console.log('shouldComponentUpdate => ' + this.props.name + '? true');
        alert('shouldComponentUpdate => ' + this.props.name + '? true');
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate => ' + this.props.name);
        alert('componentWillUpdate => ' + this.props.name);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate => ' + this.props.name);
        alert('componentDidUpdate => ' + this.props.name);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount => ' + this.props.name);
        alert('componentWillUnmount => ' + this.props.name);
    }
    
    render() {
        console.log("render => " + this.props.name);
        const wellStyles = { maxWidth: 400, margin: '20px auto 10px' };

        function Greeting(props) {
            if (props.isPassed) {
              return <Pass />;
            }
            return <Fail />;
        }    

        return (
            <div  className="well" style={wellStyles} >
                <ControlLabel> Name : </ControlLabel> {this.props.name}<br/>
                <ControlLabel> Score : </ControlLabel><em>{this.props.score}</em><br/>
                <ControlLabel> Pass : </ControlLabel><input type="checkbox" disabled={true} checked={this.state.isPassed} /><br/>
                <Greeting isPassed={this.state.isPassed}/>
            </div>
        );
    }
}