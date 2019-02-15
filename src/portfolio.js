import React, { Component } from 'react';
import adm from './img/ADM_IMG.JPG';
import fola from './img/fola.JPG';
import lahc from './img/lahc.JPG';
import dance from './img/dance.JPG';
import bigread from './img/bigread.JPG';
import avpacad from './img/avpacad.JPG';

class Portfolio extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <h1>Portfolio - Suneetha Kori</h1>
        <div className="boxalign">

          <a href ="http://sites.austincc.edu/dance/" target="_blank">
          <div className="box">
          <h3> Austin Community College - Dance Department Website </h3>
          <img src={dance} alt="Dance" />;
          <p></p>
          </div>
          </a>


          <a href="http://dean.acclahc.org/" target="_blank">
          <div className="box">
          <h3>Austin Community College - LAHC Dean's Blog </h3>
          <img src={lahc} alt="LAHC Dean" />;
          </div>
          </a>


          <a href="http://sites.austincc.edu/fola/" target="_blank">
          <div className="box">
          <h3>Austin Community College - Department of Foreign Languages </h3>
          <img src={fola} alt="FOLA" />;
          </div>
          </a>


          <a href="http://sites.austincc.edu/adm/"  target="_blank">
          <div className="box">
          <h3>Austin Community College - Department of Arts and Digital Media </h3>
          <img src={adm} alt="ADM_IMG" />;
          </div>
          </a>

          <a href="http://bigreadatx.acclahc.org" target="_blank">
          <div className="box">
          <h3>Austin Community College - BigRead </h3>
          <img src={bigread} alt="Big Read" />;
          </div>
          </a>

          <a href="http://sites.austincc.edu/avpacad/"  target="_blank">
          <div className="box">
          <h3>Austin Community College - AVP Academics </h3>
          <img src={avpacad} alt="AVP Acad" />;
          </div>
          </a>

        </div>
      </div>
    );
  }


}


  export default Portfolio;
