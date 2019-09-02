import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Html from './components/Html'
import Css from './components/Css'
import JQuery from './components/JQuery'
import JavaScript from './components/JavaScript'
import PHP from './components/PHP'
import Mongo from './components/Mongo'
import ReactC from './components/ReactC'
import NodeJs from './components/NodeJs'





export default class App extends Component {

  state={
    todos:[]
  
  
    }

  render() {


    
    return (
<Router>
<>



<Route exact path="/" render={() => 
<React.Fragment>

<div className="jumbotron" style={{height:'200px',marginTop:'-30px'}}>
    <h1>Question and Answer</h1>
    <p>Feel free to ask. ~Your question will benefit us ♥!</p>
  </div>

<br/>
      <div id="container" style={{display:'grid',gridTemplateColumns:'auto auto auto auto',gridGap:'3%',margin:'auto',width:'70%'}}>


      <div className="card" style={{width:'auto'}}>
  <img src={require('./pics/html.png')}   className="card-img-top" alt="HTML"/>
  <div className="card-body">
    <h5 className="card-title">HTML Section</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/HTML" className="btn btn-primary">Go to this section</a>
  </div>
</div>  




<div className="card" style={{width:'auto'}}>
<img src={require('./pics/css.png')}  className="card-img-top" alt="CSS"/>
  <div className="card-body">
    <h5 className="card-title">CSS Section</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/CSS" className="btn btn-primary">Go to this section</a>
  </div>
</div>  

<div className="card" style={{width:'auto'}}>
<img src={require('./pics/javascript.png')}  className="card-img-top" alt="JS"/>
  <div className="card-body">
    <h5 className="card-title">JavaScript Section</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/JavaScript" className="btn btn-primary">Go to this section</a>
  </div>
</div>  

<div className="card" style={{width:'auto'}}>
<img src={require('./pics/jQuery.png')}  className="card-img-top" alt="JQ"/>
  <div className="card-body">
    <h5 className="card-title">jQuery Section</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/JQuery" className="btn btn-primary">Go to this section</a>
  </div>
</div>  

<div className="card" style={{width:'auto'}}>
<img src={require('./pics/node.png')}  className="card-img-top" alt="nodeJs"/>
  <div className="card-body">
    <h5 className="card-title">NodeJs Section</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/NodeJs" className="btn btn-primary">Go to this section</a>
  </div>
</div>  



<div className="card" style={{width:'auto'}}>
<img src={require('./pics/react.png')}  className="card-img-top" alt="React"/>
  <div className="card-body">
    <h5 className="card-title">React Section</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="ReactC" className="btn btn-primary">Go to this section</a>
  </div>
</div>  

<div className="card" style={{width:'auto'}}>
<img src={require('./pics/mongo.png')}  className="card-img-top" alt="MongoDB"/>
  <div className="card-body">
    <h5 className="card-title">MongoDB Section</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/Mongo" className="btn btn-primary">Go to this section</a>
  </div>
</div>  

<div className="card" style={{width:'auto'}}>
<img src={require('./pics/php.png')}  className="card-img-top" alt="PHP"/>
  <div className="card-body">
    <h5 className="card-title">PHP Section</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/PHP" className="btn btn-primary">Go to this section</a>
  </div>
</div>  

      </div>
      </React.Fragment>
}/>



<Route path='/HTML' component={Html} />
<Route path='/CSS' component={Css} />
<Route path='/JQuery' component={JQuery} />
<Route path='/JavaScript' component={JavaScript} />
<Route path='/PHP' component={PHP} />
<Route path='/Mongo' component={Mongo} />
<Route path='/ReactC' component={ReactC} />
<Route path='/NodeJs' component={NodeJs} />





      </>

      </Router>
    )
  }
}
