import React from "react";

class TableCell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "#ffffff", // white by default
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fillAll !== this.props.fillAll) {
      this.setState((prevProps) => ({ color: this.props.color }));
    }

    if (prevProps.unfill !== this.props.unfill) {
      this.setState((prevProps) => ({ color: "#ffffff" }));
    }

    if (prevProps.fillUncolored !== this.props.fillUncolored) {
      if (this.state.color === "#ffffff") {
        this.setState((prevProps) => ({ color: this.props.color }));
      }
    }
  }

  cellColor = () => {
    if (this.props.hover) {
      this.setState((prevState) => ({ color: this.props.color }));
    }
  };

  colorOnClick = () => {
    this.props.handleColorOnHover();
    this.setState((prevState) => ({ color: this.props.color }));
  };

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

export default TableCell;
