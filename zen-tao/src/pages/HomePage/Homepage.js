import React, { Component } from 'react'
import NavigationBar from '../../components/NavigationBar/NavigationBar.js';
import ProjectList from '../../components/ProjectList/ProjectList.js'
export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NavigationBar/>
                <ProjectList/>
            </div>
        );
    }
}