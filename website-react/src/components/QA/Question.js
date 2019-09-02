import React, { Component } from 'react'

export default class Question extends Component {

    state = {
        title:"",
        subject:""

    }

    Submit = (e)=>{
        e.preventDefault();
        this.props.add(this.state.title,this.state.subject);
    

        alert ('Hello')

    }

userInput = (e) => {
    this.setState(
        { [e.target.name]:e.target.value });
}

    render() {
        return (
            <form>



    

   
 


    
<div style={{display:'grid',gridTemplateColumns:'auto auto auto auto',width:'70%',margin:'auto'}} class="form-group">
   
   
    <input style={{gridColumnStart:'1',gridColumnEnd:'4'}}
     type="text" 
     name="title"
    onChange={this.userInput}
    class="form-control"
     id="inputAddress"
      placeholder="Title"/>
   
   
    <select required id="inputState" class="form-control">

        <option selected disabled>Priority</option>
        <option>High </option>
        <option>Medium </option>
        <option>Low </option>

      </select>
  </div>

  <br/>

                <div style={{width:'70%',margin:'auto'}} className="input-group">

  <div  className="input-group-prepend">
    <span  className="input-group-text">Put a Question</span>
  </div>
  <textarea 
  name="subject"
  onChange={this.userInput}
  className="form-control"
   aria-label="With textarea">

   </textarea>
  <button  onClick={this.Submit} type="submit" className="btn btn-info">Submit</button>

</div>
















            </form>





        )
    }
}
