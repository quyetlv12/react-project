import React, { Component } from "react";
import ListTask from "../ListTask";
import "./style.css";
class Textbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      task: [],
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
      const done = false
      this.state.task.push({ id, name, done : done });
      this.setState({ taskName: "" });
      console.log(this.state.task);
    }
  };
  deleTask = (id) => {
    const task = this.state.task.filter((task) => task.id !== id);
    console.log(this.state.task);
    this.setState({ task });
  };
  editTask = (e) => {
    this.setState({ name: this.state.task.name });
    console.log(this.state.task.name);
  };
  checkTask = (id) => {
    const tasks = this.state.task;
    
    tasks.forEach(task => {
      if (task.id === id) {
        task.done = true;
      }
    });
    this.setState({ tasks });
    console.log(tasks);

  };
  render() {
    return (
      <div className="container mt-5">
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
                  key={task.id}
                  id={task.id}
                  value={task.name}
                  deleteTask={this.deleTask}
                  editTask={this.editTask}
                  checkTask={this.checkTask}
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
