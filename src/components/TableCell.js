import React from "react";

class TableCell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      color: "white",
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fillAll !== this.props.fillAll) {
      this.setState((prevProps) => ({ color: this.props.color }));
    }

    if (prevProps.unfill !== this.props.unfill) {
      this.setState((prevProps) => ({ color: "white" }));
    }

    if (prevProps.fillUncolored !== this.props.fillUncolored) {
      if (this.state.color === "") {
        this.setState((prevProps) => ({ color: this.props.color }));
      }
    }
  }

  cellClick = () => {
    this.setState((prevState) => ({ color: this.props.color }));
  };

  render() {
    return (
      <div
        style={{ backgroundColor: this.state.color }}
        className="cell"
        onClick={() => this.cellClick()}></div>
    );
  }
}

export default TableCell;
