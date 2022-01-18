import React from "react";
import "../style.css";

class TableCell extends React.Component {
  constructor(props) {
    super(props);


  }

  

  render() {
    return (
      <div
        className="cell"
        onClick={this.props.changeCellColor}
        onMouseDown={this.props.hoverSetTrue}
        onMouseOver={this.props.hoverChangeColor}
        onMouseUp={this.props.hoverSetFalse}
        ></div>
    );
  }
}

export default TableCell;
