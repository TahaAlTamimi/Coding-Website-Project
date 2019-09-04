import React, { PureComponent } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import MaterialCode from './component/MaterialCode'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'


export class AppTamimi extends PureComponent {
  state={HeaderShow:true}
  render() {
    return (
      // By Tamimi use ROUTER xxxxx to change between pages http:
      <div>

         <Router>
       
                {/* By Tamimi use switch to make move betwen path */}
                 <Switch>

                 
                      <Route path="/" exact component={Home}/>
                 
                       <Route  path="/material" exact component={MaterialCode}/>

                  </Switch>
                
               
            </Router>
        
        {/* Finish Router */}
      
     
      
      </div>
      
    )
  }
}

// BY Tamimi Back TO main page .

const Home =()=>(

  <div>
 
        <h1>Home page</h1>
 
   </div>

)


export default AppTamimi