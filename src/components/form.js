import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
     
      <form
        className="contForm"
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xqkggvpd"
        method="POST"
      >
        
       
        <input type="text" required className="inputCont" name="name" placeholder="Name"/><br/>
        
        <input type="tel" required className="inputCont" name="number" placeholder="Phone Number"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/><br/>


        <input type="email" required className="inputCont" name="email" placeholder="Email Address"/><br/>
        
        <textarea className="inputText" name="message" placeholder="Message"></textarea><br/>
                        
        {status === "SUCCESS" ? <p className="status">Thank You for the Message!</p> : <button  className="buttonClass" >Submit</button>}
        {status === "ERROR" && <p className="status">Ooops! There was an error.</p>}
      </form>
      
      
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}