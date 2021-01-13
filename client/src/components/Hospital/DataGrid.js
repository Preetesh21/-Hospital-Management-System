import * as React from "react";
import ReactTable from "react-table";
//import "react-table/react-table.css";

export default class DataGrid extends React.Component {
  render() {
    return <ReactTable data={this.props.data} columns={this.props.columns} />;
  }
}
