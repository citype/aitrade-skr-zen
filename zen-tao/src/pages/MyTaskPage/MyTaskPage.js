import React, { Component } from "react"
import './MyTaskPage.css'
import NavigationBar from "../../components/NavigationBar/NavigationBar.js"
import * as API from '../../Constants/API.js'
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table"
import axios from 'axios'
import { Navbar } from "react-bootstrap"


 
// class TasksTable extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return <table className="mt-table">
//             <tr>
//               <td>111</td>
//               <td>222</td>
//               <td>333</td>
//               <td>44</td>
//               <td>555</td>
//               <td>666</td>
//               <td>777</td>
//               <td>888</td>
//               <td>999</td>
//             <td>000</td>
//             </tr>
//             <tr>
//               <td>{this.props.projectName}</td>
//               <td>{this.props.taskName}</td>
//               <td>{this.props.taskId}</td>
//               <td>{this.props.taskPLevel}</td>
//               <td>{this.props.taskCreateUserName}</td>
//               <td>{this.props.taskFinishUserName}</td>
//               <td>{this.props.taskEstimatedConsumption}</td>
//               <td>{this.props.taskEstimatedConsumption}</td>
//               <td>{this.props.taskEstimatedConsumption}</td>
//               <td>{this.props.taskActrualConsumption}</td>
//               <td>{this.props.taskDeadDate}</td>
//               <td>{this.props.taskState}</td>
//               <td>{this.props.taskState}</td>
//               <td>{this.props.taskBeginDate}</td>
//             </tr>
//           </table>;
//     }
// }

export default class MyTaskPage extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            data: [] 
        };
    }
    componentDidMount() {
        fetch("/task/list?userId=1&projectId=1")
        .then(res=> res.json())
        .then(
            (result) => {
                this.setState({
                    data:result.data
                });
                console.log("--->",result.data)
            },
            (error) => {
                console.log("error:",error)
            }
        )
    }

    render () {
        // const table = this.state.data.map((elt, index) => {
        //     return(
        //         <TasksTable taskBeginDate={elt.taskBeginDate} taskStat={elt.taskState}
        //             taskDeadDate={elt.taskDeadDate} taskActrualConsumption={elt.taskActrualConsumption}
        //             taskFinishUserName={elt.taskFinishUserName} taskCreateUserName={elt.taskCreateUserName}
        //             taskPLevel={elt.taskPLevel} taskId={elt.taskId} taskName={elt.taskName} projectName={elt.projectName}
        //         />
        //     )
        // })
        return 
        <div>
            <NavigationBar />
            <div className="mt-container">

            </div>
        </div>
    }
}

