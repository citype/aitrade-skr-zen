import React, { Component } from "react"
import './TimeLine.css'

export default class TimeLine extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div class="box">
            <ul id="first-list">
              <li>
                <span />
                <div class="title">comment #01</div>
                <div class="info">
                  the best animation , the best toturials you would ever
                  see
                </div>
                <div class="name">- dr. mohamed -</div>
                <div class="time">
                  <span>
                    JUN, 17
                    <sup>th</sup>
                  </span>
                  <span>12:00 AM</span>
                </div>
              </li>
            </ul>
          </div>;
    }

}