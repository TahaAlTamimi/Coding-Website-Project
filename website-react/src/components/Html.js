import React, { Component } from 'react'
import Question from './QA/Question'
import Answer from './QA/Answer'



export default class Html extends Component {
    state = {
        addQ:[]
    }

    add = (a,b) => {
        const newQ={
          title:a,
          subject:b
        };
        this.setState (
          {
            addQ:[...this.state.addQ,newQ]

          }

        )

      }

    render() {
        return (
            <>

<div className="jumbotron" style={{height:'200px',marginTop:'-30px'}}>
<a href="/" style={{float:'right',textDecoration:'none',fontSize:'3em'}} class="material-icons">home</a>

    <h1>HTML</h1>
    <p>The language for building web pages.</p>
  </div>           
  

  <Question add={this.add} />

  <Answer addQ={this.state.addQ} />
  
  
  
  
  
  
  
   </>
        )
    }
}
