import React from "react";
import OutputItem from "./outputItem";
const outputFetches = (props) => {
    const {datas}=props; 
    console.log(datas)
    return (
      <div className="output-container" style={styles.output_container}>
        <h1  style={styles.head_output}>Output From Firebase</h1>
        <table className="data-container" align="center" border={1} width="600px">
          <thead>
          <tr className="table_header">
            <td className="table_heading">Name</td> 
            <td className="table_heading">Email</td>
            <td className="table_heading">Password</td>
          </tr>
          </thead>
          <tbody>
          {datas.map((data) => ( 
          <tr className="table_row"  key={data.id}><OutputItem data={data}/></tr>  
          ))}
          </tbody>
          <tfoot></tfoot>
        </table> 
      </div>
    );
  } 
  export default outputFetches;
const styles = {
  output_container: {
    height: "100%",
    backgroundColor: "azure",
    width: "50%",
    border: "2px solid teal",
    float: "right"
  },
  head_output:{
    color:"teal"
  }
};
