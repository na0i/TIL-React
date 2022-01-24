import './App.css';
import React, { Component } from 'react';
import Contents from './Components/Contents';
import Profile from './Components/Profile';
import Projects from './Components/Projects';

// react의 컴포넌트라는 class를 상속해
// app이라는 새로운 클래스를 만들고
// 이 app은 render라는 함수를 가지고 있다.
class App extends Component {

  // 렌더 함수보다 먼저 실행이 되며
  // 해당 컴포넌트를 초기화 시켜주는 코드
  constructor(props){
    super(props);
    this.state = {
      profile: {name: 'na0i', age:'27'},
      contents: [
        {id: 1, title: 'SOLVER', desc: '솔버 프로젝트'},
        {id: 2, title: 'IRIONEORA', desc: '이리오너라 프로젝트'},
        {id: 3, title: 'ASL', desc: 'Alice in SQLand 프로젝트'},
      ]
    }
  }

  render() {
    return(
      <div className="App">
        <Profile
          title={this.state.profile.name}
          sub={this.state.profile.age}>
        </Profile>
        <Profile title="티맥스" sub="박나영입니다."></Profile>
        <Projects></Projects>
        <Contents data={this.state.contents}></Contents>
      </div>
    )
  }
}

export default App;


// function App() {
//   return (
//     <div className="App">
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>
//     </div>
//   );
// }