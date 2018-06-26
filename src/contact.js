import React, { Component } from 'react';


class Contact extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <h1>Contact</h1>
        <div className="contact content">
        <a href="mailto:suneetha.kori@gmail.com"><i class="far fa-envelope fa-4x"></i>  </a>
        <a href="https://www.linkedin.com/in/suneetha-kori-b5057721/"target="_blank"><i class="fab fa-linkedin fa-4x"></i></a>
        <a href="https://github.com/suneethaykori/javascript-workbook" target="_blank"><i class="fab fa-github fa-4x"></i></a>
        <a href="https://www.facebook.com/suneetha.kori" target="_blank"><i class="fab fa-facebook fa-4x"></i></a>

        </div>
      </div>
    );
  }


}


  export default Contact;
