import React, { Component } from 'react';


class Home extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <h1> Suneetha Kori </h1>
        <h1>Hey! Glad you are here..</h1>

        <div className="content">
          <p className="home"> Hello, I am a web developer living in Austin Metero area in TX.
          I love to deisgn and develop interactive and intutive web sites.
          When I am not working I enjoy spending time with my family playing games and singing.
          </p>

        </div>
      </div>
    );
  }


}


  export default Home;
