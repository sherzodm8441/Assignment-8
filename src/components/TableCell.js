import React, { Component } from "react";

export default class TableCell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "#ffffff", // white by default
    };

    this.cellColor = this.cellColor.bind(this);
    this.colorOnClick = this.colorOnClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    // USER STORY #8 - fill all cells to selected color
    if (prevProps.fillAll !== this.props.fillAll) {
      this.setState({ color: this.props.color });
    }

    // USER STORY #9 - unfill all cells - default color white
    if (prevProps.unfill !== this.props.unfill) {
      this.setState({ color: "#ffffff" });
    }

    // USER STORY #7 - fill uncolored cells to selected color
    if (prevProps.fillUncolored !== this.props.fillUncolored) {
      // change cell color only if currently white
      if (this.state.color === "#ffffff") {
        this.setState({ color: this.props.color });
      }
    }
  }

  // USER STORY #10 - change grid cell color on mouse click and drag
  cellColor() {
    if (this.props.hover) {
      this.setState({ color: this.props.color });
    }
  }

  // USER STORY #6 - change grid cell color on click
  colorOnClick() {
    this.props.handleColorOnHover();
    this.setState({ color: this.props.color });
  }

  render() {
    return (
      <div
        style={{ backgroundColor: this.state.color }}
        className="cell"
        onMouseDown={this.colorOnClick}
        onMouseOver={this.cellColor}
        onMouseUp={this.props.handleRemoveHover}></div>
    );
  }
}
