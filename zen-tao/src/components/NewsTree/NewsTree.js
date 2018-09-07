import React,{ Component } from 'react'
import './NewsTree.css'

export default class NewsTree extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className = "nt-container">
                <p className = "pl-card-title">最新动态</p>
                <p className = "nt-title-more">MORE</p>
                <div className = "nt-panel-body">
                        
                </div>
            </div>
        );
    }
}
