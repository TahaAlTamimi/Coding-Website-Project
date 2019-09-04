import React, { Component } from "react";




export class MaterialBox extends Component {

  state = {
  
    material: [],
  
    showMaterial: false
  
  };

  // componentDidMount() {
  
  //   console.log("REACT:get");
  
  //       axios
  
  //             .get(`http://localhost:9000/materials/all`)
  
  //              .then(response => {
  
  //               this.setState({ material: response.data });
  
  //               console.log("React:get response.data", response.data);
  
  //               })
  
  //             .catch(error => {
  
  //               console.log("Error", error);
  
  //               });
  
  //               console.log(this.state.material);
  
  // }

    insertMaterial = () => {
      // By Tamimi use to toggle on insert data that contents link and material
      // console.log("kkk")

          this.setState({

                showMaterial: !this.state.showMaterial

          });

            console.log(this.state.showMaterial);

    };

    render() {

        // console.log(this.props.material) 

        // By Tamimi use to shortcut when use

          const { material } = this.props;

           console.log(this.state.material)

    return (

      <div className=" col-md-4">

        <div

             onClick={this.insertMaterial}

              className="card card-body mb-3 mt-3 "

               style={{ cursor: "pointer" }}

        >
             <h1>
               {/* By tamimi use to inset data name link */}

                 {material.name} 
                  <i 
                  className="fas fa-sort-down" 
                  />

              </h1>

          

            <ul className="list-grou ">


              <li className="list-group-item">

                      {/* By tamimi use to inset data video link */}

                     <a href={material.video} 

                        target="_blank"
                      > 


                        Video
                     </a>

              </li>


              <li className="list-group-item">

                  {/* By tamimi use to inset data slides link */}

              <a 
              href={material.slides} 

              target="_blank"
              >

                slides


               </a>

               </li>

              <li className="list-group-item">


                {/* By tamimi use to inset data helpful link */}

                <a 
                href={material.helpful}

                target="_blank"
                >

                helpful

                </a>

                </li>

            </ul>

          

        </div>

        
      </div>

    );

  }


}

export default MaterialBox;