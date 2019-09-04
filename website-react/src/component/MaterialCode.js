import React, { Component } from "react";
import MaterialBox from "./MaterialBox";
import axios from 'axios'




export class MaterialCode extends Component {

  state = { material: [] };


  //By tamimi start to response , request from react to server

  componentDidMount() {

    console.log('REACT:get');

        axios.get(`http://localhost:9000/materials/all`)

          .then(response => {

            this.setState({ material: response.data })

            console.log('React:get response.data', response.data);

          })

          .catch(error => {

            console.log("Error", error)

          })

          console.log(this.state.material)
  }

  //end of res/req 

  render() {

    console.log(this.state.material)

    return (

      //  By Tamimi useghshdfghsghsghsgfhsd to transfer data to material box to show in card.
      
      <div className="container">
       
          <div className="row">
       
             {this.state.material.map((item, index) => {
            
                 return (
                
                     <MaterialBox

                      material={item}
                
                      key={index}
                     />

                           );

                })
          
          }
         
        
         </div>
      
      </div>
    
    );
  
  }

}



export default MaterialCode;