import React, { Component } from "react";
import ListTask from "../ListTask";

class Textbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      task: [
        {
          id: 1,
          name: "1122",
        },
        {
          id: 2,
          name: "1tg22",
        },
      ],
    };
  }
  myChangeHandler = (event) => {
    this.setState({ taskName: event.target.value });
    // console.log(this.state.taskName);
  };
  addTask = () => {
    // const list = []
    // list = JSON.parse(localStorage.setItem("todo",list))
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
  editTask = (e) => {
    this.setState({ name: this.state.task.name });
    console.log(this.state.task.name);
  };
  render() {
    const colorText = {
      color: "blue",
      fontsize: 20,
    };
    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
          <h1 style={colorText}>TODO LIST</h1>
        </div>
        <div className="row">
          <div className="col-lg-10 col-md-12">
            <input
              placeholder="Nhập công việc ..."
              type="text"
              value={this.state.taskName}
              className="form-control"
              onChange={this.myChangeHandler}
            />
          </div>
          <div className="col-lg-2 col-md-12">
            <button className="btn btn-primary w-100" onClick={this.addTask}>
              Thêm công việc
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
                  editTask={this.editTask}
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
