import React, { Component } from 'react';


class Portfolio extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <h1>Portfolio</h1>
        <div className="boxalign">
          <a href =" https://suneethaykori.github.io/web-workbook/checkpoint1/" target="_blank">
          <div className="box">
          <h3> Mock Up Ecommerce Website </h3>
          <p><i class="fab fa-html5 fa-3x"></i> <i class="fab fa-css3 fa-3x"></i> </p>
          </div>
          </a>
          <a href="https://suneethaykori.github.io/web-workbook/checkpoint2/"target="_blank">
          <div className="box">
          <h3>Responsive Website </h3>
          <p> <i class="fab fa-html5 fa-3x"></i> <i class="fab fa-css3 fa-3x"></i> </p>
          </div>
          </a>
          <a href="https://suneethaykori.github.io/web-workbook/checkpoint3/"target="_blank">
          <div className="box">
          <h3>Dart Game </h3>
          <p> <i class="fab fa-html5 fa-3x"></i> <i class="fab fa-css3 fa-3x"></i> <i class="fab fa-js fa-3x"></i> </p>
          </div>
          </a>

        </div>
      </div>
    );
  }


}


  export default Portfolio;
