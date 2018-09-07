import React, { Component } from 'react'
import './WorkFlow.css'

class WorkFlowTable extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <table className= "pl-card-table">
                <tr className="pl-card-table-title">
              <th>角色</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
            </tr>
                <tr className="pl-card-table-detail">
              <td>管理员</td>
              <td>维护公司</td>
              <td>添加用户</td>
              <td>维护权限</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>管理员</td>
              <td>维护公司</td>
              <td>添加用户</td>
              <td>维护权限</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>管理员</td>
              <td>维护公司</td>
              <td>添加用户</td>
              <td>维护权限</td>
              <td>-</td>
              <td>-</td>
            </tr>
        </table>
        );
    }
}

export default class WorkFlow extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <div className = "wf-container">
                <p className="pl-card-title">流程图</p>
                <WorkFlowTable/>
            </div>
        );
    }
}