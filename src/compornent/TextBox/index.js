import React, { Component } from "react";
import ListTask from "../ListTask";

class Textbox extends Component {
  constructor(props) {
    super(props);
    this.state = { taskName: "", task: [] };
  }
  myChangeHandler = (event) => {
    this.setState({ taskName: event.target.value });
    // console.log(this.state.taskName);
  };
  addTask = () => {
    if (this.state.taskName === "") {
      alert("vui lòng nhập task");
    } else {
      const id = this.state.task.length;
      const name = this.state.taskName;
      this.state.task.push({ id, name });
      this.setState({ taskName: "" });
    }
  };
  deleTask = (e) => {
    console.log(e);
    this.state.task.splice(e, 1);
    console.log(this.state.task);
    this.setState({ taskName: "" });
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
          <h1>TODO LIST</h1>
        </div>
        <div className="row">
          <div className="col-10">
            <input
              type="text"
              value={this.state.taskName}
              className="form-control"
              onChange={this.myChangeHandler}
            />
          </div>
          <div className="col-2">
            <button className="btn btn-primary w-100" onClick={this.addTask}>
              Thêm
            </button>
          </div>
        </div>
        <div className="row">
          {this.state.task.length === 0 ? (
            <div className="mt-3">
              <h2>KHÔNG CÓ CÔNG VIỆC NÀO</h2>
            </div>
          ) : (
            this.state.task.map((task, index) => {
              return (
                <ListTask
                  key={index}
                  id={index}
                  value={task.name}
                  deleteTask={this.deleTask}
                ></ListTask>
              );
            })
          )}
        </div>
      </div>
    );
  }
}

export default Textbox;
