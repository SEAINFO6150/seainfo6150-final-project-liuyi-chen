import React, { Component } from "react";


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
      
      <div >Your name is {this.state.submittedForm.get("firstName")} {this.state.submittedForm.get("lastName")}.
      Your phone number is {this.state.submittedForm.get("telephone")}.
      Your email address is {this.state.submittedForm.get("email")}.
      Your age is {this.state.submittedForm.get("age")}. 
      Your advice is {this.state.submittedForm.get("advice")}. 
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
        <div>  Sex: </div>
        <select name="sex">
          <option>Female</option>
          <option>Male</option>
        </select>
        <div>  Age: </div>
        <select name="age">
          <option>above 18</option>
          <option>under 18</option>
        </select>
        <div>  Advice Type: </div>
        <br></br>
        <form action="" method="get">  
<label><input name="adviceType" type="checkbox" value="" />price </label> 
<label><input name="adviceType" type="checkbox" value="" />user information </label> 
<label><input name="adviceType" type="checkbox" value="" />book information </label> 
</form> 
<div> Your  Advice: </div>
        <input type="text" name="advice"  required />
        <br></br>
        <br></br>
        
        <input type="submit" value="Send" />
      </form>
    
    );
    
  }
 
}
