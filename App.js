import './App.css';
import React, {Component} from 'react';
import Display from './components/Display';
import AddCourse from './components/AddCourse';

class App extends Component {

  state = {
    courseDetails: [
      {id:1, name: 'React', duration: 15, description: 'Small description'}, 
      {id:2, name: 'Java', duration: 14, description: 'Small description'}, 
      {id:3, name: 'Data Structures', duration: 10, description: 'Small description'}
    ]
  }

  deleteCourse = (id) => {
    console.log('Update the state in this component', id);
    let itemList = this.state.courseDetails.filter(item => {
    // 1 !== 1  
    // 2 !== 1
    // 3 !== 1
      return( item.id !== id)
    });
    // console.log(itemList);
    this.setState({
      courseDetails: itemList
    })
  }

  addCourse = (course_detail) => {
      console.log(course_detail);
      course_detail.id = (4 + Math.ceil(Math.random()*100));

       let courseDetails = [...this.state.courseDetails, course_detail]
       console.log('New array', courseDetails);

      this.setState({
        // courseDetails: this.state.courseDetails.push(course_details)
        courseDetails
      })
  }

  render(){
    return (
      <div className="App">
        <Display 
          courseDetails={this.state.courseDetails}
          deleteCourse = {this.deleteCourse}
        ></Display>
        <AddCourse addCourse={this.addCourse}></AddCourse>
      </div>
    );
  }
}

export default App;
