import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      Subjects : [
        {name : "Cloud Computing", votes : 0},
        {name : "Data Mining", votes : 0},
        {name : "Advanced Java", votes : 0}
      ]
    }
  }
  vote(i){
    let newSubjects = [...this.state.Subjects];
    newSubjects[i].votes++;
    this.setState({Subjects : newSubjects})
  }

  render(){
    return(
      <><h1>Vote for your elective</h1>
      <div className='subjects'>
        {this.state.Subjects.map((sub,i) => (
          <div key={i} className="subject">
          <div className='voteCount'>{sub.votes}</div>
          <div className='subjectName'>{sub.name}</div>
          <button  onClick={this.vote.bind(this,i)}>Click</button>
          </div>
        ))}

      </div></>
    )
  }
}

export default App;
