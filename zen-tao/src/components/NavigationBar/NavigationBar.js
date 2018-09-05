import React, { Component } from 'react'
import './NavigationBar.css'
import PersonIcon from '../../assets/person.svg'

export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className = "nb-header-div">
                <ul className = 'nb-ul'>
                    
                    <li><a href="#">Project</a></li>
                    <li><a href = "#">Task</a></li>
                    <li><a href="#">Statistical</a></li>
                    <li className="nb-li-right"><a href="#">name</a></li>
                    <li className="nb-li-right"><a href = "#"><img className ="nb-li-headicon" src={ PersonIcon }/></a></li>
                </ul>
            </div>
        );
    }
}