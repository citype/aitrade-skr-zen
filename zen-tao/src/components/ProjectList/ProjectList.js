import React, { Component } from 'react'
import './ProjectList.css'

class ProjectTabel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <table className = "pl-card-table">
            <tr className = "pl-card-table-title">
                <th>项目名称</th>
                <th>截止日期</th>
                <th>状态</th>
                <th>预计</th>
                <th>消耗</th>
                <th>剩余</th>
                <th>进度</th>
                <th>燃尽图</th>
            </tr>
            <tr className = "pl-card-table-detail">
                <td>企业网站第二期</td>
                <td>2015-09-11</td>
                <td>已延期</td>
                <td>11</td>
                <td>2</td>
                <td>0</td>
                <td>100%</td>
                <td></td>
            </tr>
            <tr className = "pl-card-table-detail">
                <td>企业网站第二期</td>
                <td>2015-09-11</td>
                <td>已延期</td>
                <td>11</td>
                <td>2</td>
                <td>0</td>
                <td>100%</td>
                <td></td>
            </tr>
            <tr className = "pl-card-table-detail">
                <td>企业网站第二期</td>
                <td>2015-09-11</td>
                <td>已延期</td>
                <td>11</td>
                <td>2</td>
                <td>0</td>
                <td>100%</td>
                <td></td>
            </tr>
            </table>
        );
    }

}
export default class ProjectList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className = "pl-card-container">
                <p className = "pl-card-title">进行中的项目</p>
                <ProjectTabel/>
            </div>
        );
    }
}