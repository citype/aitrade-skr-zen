import React, { Component } from 'react'
import NavigationBar from '../../components/NavigationBar/NavigationBar';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NavigationBar/>
            </div>
        );
    }
}