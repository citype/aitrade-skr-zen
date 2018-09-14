import React, { Component } from "react"
import './MyTaskPage.css'
import NavigationBar from "../../components/NavigationBar/NavigationBar.js";

class TasksTable extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <table className="mt-table">
            <tr>
              <th>空格</th>
              <th>ID</th>
              <th>P</th>
              <th>所属迭代</th>
              <th>任务名称</th>
              <th>创建</th>
              <th>指派给</th>
              <th>由谁完成</th>
              <th>预计</th>
              <th>消耗</th>
              <th>剩余</th>
              <th>截止</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
            <tr>
              <td>空格</td>
              <td>026</td>
              <td>3</td>
              <td>N001</td>
              <td>液晶测试</td>
              <td>guest</td>
              <td>guest</td>
              <td>guest</td>
              <td>8</td>
              <td>4</td>
              <td>0</td>
              <td>2018-09-11</td>
              <td>已完成</td>
              <td>编辑完成修改保存</td>
            </tr>
          </table>;
    }
}
export default class MyTaskPage extends Component {
    constructor(props) {
        super(props)
    } 
    render () {
        return (
            <div>
                <NavigationBar/>
                <div className="mt-container">
                    <TasksTable />
                </div>
            </div>
        );
        
    }
}

