import React, { Component } from "react";
import NavigationBar from '../../components/NavigationBar/NavigationBar.js';
import ProjectList from '../../components/ProjectList/ProjectList.js'
import NewsTree from '../../components/NewsTree/NewsTree.js'
import WorkFlow from '../../components/WorkFlow/WorkFlow.js'

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className = "hp-container">
                <NavigationBar/>
                <ProjectList/>
                <NewsTree/>
                <WorkFlow/>
            </div>
        );
    }
}