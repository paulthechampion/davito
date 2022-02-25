import React,{useState} from 'react';

export default class Accordion extends React.Component {
  constructor() {
    super();
    this._handleClick = this._handleClick.bind(this);
    this.state = {
      active: false,
    };
  }
  componentDidMount() {
    this._handleClick();
  }
  
  _handleClick() {
    const acc = this._acc.children;
    const chev = document.getElementsByClassName("arrow")

    for (let i = 0; i < acc.length; i++) {
      let a = acc[i];
      let b = chev[i];
      a.onclick = () => {
        a.classList.toggle("active")
        if(b.innerHTML === `<i class="fas fa-angle-up"></i>`){
            b.innerHTML=`<i class="fas fa-angle-down"></i>`
        }
        else{
          b.innerHTML = `<i class="fas fa-angle-up"></i>`
        }
        
      };
      
    }
  }
  
  render() {
    return (
      <div 
        ref={a => this._acc = a} 
        onClick={this._handleClick}>
        {this.props.children}
      </div>
    )
  }
}