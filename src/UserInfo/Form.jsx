import React, { Component } from "react";
import styles from "./Form.module.css";


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedForm: null
    };
  }


  onSubmit = async e => {
    function validate(){
      let obj1 = document.getElementsByName("telephone");
      let obj2 = document.getElementsByName("email");
      var tel = obj1[0].value;
      var mail = obj2[0].value;
      var reg = /^[0-9]+$/;
      var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/; 
      if(tel!=""&&!reg.test(tel)){ 
                alert('While you input the telephone, you can only type in number!'); 
                return false; 
     
    }

     if(!myreg.test(mail)){
      alert('Please type in validate email address !'); 
      return false; 
 
      }}
    e.preventDefault();
    validate();
    const data = new FormData(e.target);
    this.setState({ submittedForm: data });
  };

  render() {
    
    return this.state.submittedForm ? (
      
 

      <div>
         <div>You try to update your information as :</div>
         <div>
         <table className={styles.theTable}>
             <tr>
                <th>User Name</th>
                 <th>Age</th>
                 <th>Phone Number</th>
                 <th>E-mail</th>
                 <th>Address</th>
             </tr>
             <tr>
              <td>{this.state.submittedForm.get("firstName")} {this.state.submittedForm.get("lastName")}</td>
              <td>{this.state.submittedForm.get("age")}</td>
              <td>{this.state.submittedForm.get("telephone")}</td>
              <td>{this.state.submittedForm.get("email")}</td>
              <td>{this.state.submittedForm.get("address")}</td>
             </tr>

           </table>
         </div>

      </div>
    ) : (
      <form onSubmit={this.onSubmit}>
        <div>First Name: </div>
        <input type="text" name="firstName" required />
        <div>   Last Name: </div>
        <input type="text" name="lastName"  required />
        <div>Telephone No: </div>
        <input type="text" name="telephone" required />
        <div>Email: </div>
        <input type="text" name="email" required />
        
        <div>  Age: </div>
        <input type="text" name="age" required />
        
         <div> Your  Address: </div>
        <input type="text" name="address"  required />
        <br></br>
        <br></br>
        
        <input type="submit" value="edit" />
      </form>
    
    );
    
  }
 
}
