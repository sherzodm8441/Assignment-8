import React, { Component } from "react";
import UserButton from "./UserButton";

export default class Header extends Component {
  render() {
    return (
      <header className="user-inputs">
        <label>
          Pick Color
          <input type="color" value={this.props.color} onChange={this.props.changeColor} />
        </label>
        <UserButton text="Add Row" handleClick={this.props.addRow} />
        <UserButton text="Delete Row" handleClick={this.props.deleteRow} />
        <UserButton text="Add Column" handleClick={this.props.addColumn} />
        <UserButton text="Delete Column" handleClick={this.props.deleteColumn} />
        <UserButton text="Fill All" handleClick={this.props.fillOnClick} />
        <UserButton text="Unfill All" handleClick={this.props.unfillOnClick} />
        <UserButton text="Fill Uncolored" handleClick={this.props.fillUncolored} />
      </header>
    );
  }
}
