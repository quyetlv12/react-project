import React, { Component } from "react";

export default class ListTask extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <ul className="mt-3 px-3">
        <li className="d-flex justify-content-between">
          <span>{this.props.value}</span>{" "}
          <div>
            <button
              className="btn btn-danger"
              onClick={() => this.props.deleteTask(this.props.id)}
            >
              <i className="fas fa-trash"></i>
            </button>
            <button className="btn btn-success">
              <i className="fas fa-edit"></i>
            </button>
          </div>
        </li>
      </ul>
    );
  }
}
