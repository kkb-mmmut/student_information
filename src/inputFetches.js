import react from "react";
import { firestore } from "./firebase"; 
export default class inputFetches extends react.Component { 
  constructor(props) { 
    super(props); 
    this.state = {
      student: {
        name: props.name,
        email: props.email,
        password: props.password
      }
    }
  }
  handleNameChanged(event) {
    var student        = this.state.student;
    student.name  = event.target.value;
    this.setState({ student: student });
  }
  handleEmailChanged(event) {
    var student        = this.state.student;
    student.email  = event.target.value;
    this.setState({ student: student });
  }
  handlePassChanged(event) {
    var student        = this.state.student;
    student.password  = event.target.value;
    this.setState({ student: student });
  }
  handleButtonClicked() {
    console.log(this.state.student);
  }
  show(){
    console.log(this.state.student);
  }
  addProduct(){  
    var {name,email,password}=this.state.student;
    firestore
    .collection("student")
    .add({
      name:name,
      email:email,
      password:password
    })
    .then((docRef)=>{
      console.log(docRef);
    }).catch((error)=>{
      console.log("Error:"+error);
    })
  }
  render() {   
    return (
      <>
        <div className="form-container" style={styles.form_container}>
          <h1 style={styles.head_input}>Enter the Details</h1> 
          <h1 style={{float:"left",textIndent:"20px"}}>Enter Info.. </h1>
          <div className="contain">  
          <form className="form">
          <input type="text" id="name" placeholder="Enter Name" value={this.state.student.name} onChange={this.handleNameChanged.bind(this)}/>
          <input type="email" id="email" placeholder="Enter Email" value={this.state.student.email} onChange={this.handleEmailChanged.bind(this)}/> 
          <input type="password" id="password" placeholder="Enter Secret Key" value={this.state.student.password} onChange={this.handlePassChanged.bind(this)}/> 
          <input type="button" id="submit" onClick={this.addProduct.bind(this)} onChange={this.handleButtonClicked.bind(this)} value="Submit"/> 
          </form>
          </div> 
        </div>
      </>
    );
  }
}
const styles = {
  form_container: {
    height: "100%",
    backgroundColor: "azure",
    width: "50%",
    border: "2px solid teal",
    float: "left"
  },
  head_input:{
    color:"teal"
  }
};
