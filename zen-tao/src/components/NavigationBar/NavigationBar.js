import React, { Component } from 'react'
import './NavigationBar.css'
import PersonIcon from '../../assets/person.svg'
import { Link } from 'react-router-dom'

export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="nb-header-div">
            <ul className="nb-ul">
              <Link to="/">
                    <li><a>Home</a></li>
              </Link>
              <li>
                <a href="#">Project</a>
              </li>
              <Link to="/task">
                    <li><a>Task</a></li>
              </Link>
              <li>
                <a href="#">Statistical</a>
              </li>
              <li className="nb-li-right">name</li>
              <li className="nb-li-right">
                <a href="#">
                  <img className="nb-li-headicon" src={PersonIcon} />
                </a>
              </li>
            </ul>
          </div>;
    }
}