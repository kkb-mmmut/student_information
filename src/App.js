import "./App.css";
import React from "react";
import Input from "./inputFetches";
import Output from "./outputFetches";  
import { firestore } from "./firebase";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      datas: [],
      loading: true
    };
  }
  componentDidMount(){
     
     firestore
      .collection("student")
      .onSnapshot((snapshot)=>{
        const datas=snapshot.docs.map(document=>{
          const data=document.data();
          data['id']=document.id;
          return data;
        });
        this.setState({datas:datas,loading:false});
      })
  }
  render(){
    const { datas, loading } = this.state;
    console.log(datas);
  return (
    <div className="App">
      <div className="header">
        <h1>Fetching Data From Firebase  </h1>
      </div>
      <div className="container"> 
      <Input />
      <Output datas={datas} loading={loading}/>
      </div>
    </div>
  );
}
}
