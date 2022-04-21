//THIS IS THE FRONT-END API ANG NAAS STUDENT-APP FOLDER NAA DARI ANG COMPONENTS SA FRONT END AND STUFF
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import CreateStudent from './components/CreateStudent';
import ShowStudentDetails from './components/ShowStudentDetails';
import ShowStudentList from './components/ShowStudentList';
import UpdateStudentInfo from './components/UpdateStudentInfo';

class App extends Component{

  render(){
    // ang route path mao ning gamiton para pagtawag sa web pages na gi code sa component ginatawag ang mga webpages na js naas components folder
    //edit una sa component para naa kay matawag sa route path = '/create-student' component = *kani createstudent makita nis component na gi edit nimos component folder na naas js like cont CreateStudent *{CreateStudent}
    //makita na nimos folder na componenets ginatawag ang mga components file js nag base nas pinakauna na gitawag like sa cont ShowStudentList
    // og dapat ma export default (component variable name ex. "CreateStudent;""); ex: export default CreateStudent;
    //dapat ma export agn mga component para pwede sya magamit sa outside sa dependencies or folders or ma call ang variable name or ma set sa lain na file or matawag sa lain na file js 
    //or any module jud more like ma global variable na sya
    return(
      <Router>
        
        <div>
          
        <Route exact path = '/' component = {ShowStudentList} />
        <Route path = '/create-student' component = {CreateStudent} />
        <Route path = '/edit-student/:id' component = {UpdateStudentInfo} />
        <Route path = '/show-student/:id' component = {ShowStudentDetails} />
        </div>
      </Router>
    )
  }
}

export default App;