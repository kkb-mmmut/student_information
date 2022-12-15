import React from "react";
class outputItem extends React.Component {
  
  render() {
    const { name,email,password} = this.props.data; 
    console.log(name);
    return (  
      <>
              <td className="tabel_data">{name}</td>
              <td className="tabel_data">{email}</td>
              <td className="tabel_data">{password}</td> 
              </> 
    );
  }
} 
export default outputItem;
