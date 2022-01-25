import './App.css';
// 컴포넌트 등록
import React, { Component } from 'react';
import ReadContents from './Components/ReadContents';
import Control from './Components/Control';
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

    // 리액트는 state 값이 바뀔 때마다
    // 해당 state를 가지고 있는 컴포넌트의 render 함수가 재호출됨
    // render 함수 하위의 컴포넌트까지 싹 재호출(props도 마찬가지)
    this.state = {
      mode: 'first',
      selected_content_id: 1,
      first: {title: 'welcome', desc: 'hi react!'},
      profile: {name: 'na0i', age:'27'},
      contents: [
        {id: 1, title: 'SOLVER', desc: '솔버 프로젝트'},
        {id: 2, title: 'IRIONEORA', desc: '이리오너라 프로젝트'},
        {id: 3, title: 'ASL', desc: 'Alice in SQLand 프로젝트'},
      ]
    }
  }

  render() {
    // console.log(this)
    // render 함수 내에서 this는 그 render 함수가 속해있는 컴포넌트 자신을 가리킨다.
    // 이벤트 함수 속 this는 undefined
    var _title, _desc = null;
    if (this.state.mode === 'first'){
      _title = this.state.first.title;
      _desc = this.state.first.desc;
    } else if (this.state.mode === 'second'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i += 1
      }
    }
    return(
      <div className="App">
        {/* 속성값 내려주기와 유사하게 */}
        {/* 함수 내려주기 */}
        <Profile
          title={this.state.profile.name}
          sub={this.state.profile.age}
          onChangePage={function(){
            this.setState({mode: 'first'});
          }.bind(this)}
        >
        </Profile>
        {/* <div> */}
          {/* 이렇게 했더니 a 태그를 클릭할 때마다 reload 되는 문제 발생 */}
          {/* function의 첫번째 인자로 event 함수가 있고 */}
          {/* 이 중 'preventDefault: a태그의 기본적 동작을 막는다' 를 이용해 */}
          {/* 새로고침을 막겠다. */}
          {/* <h1><a href="/" onClick={function(){
            alert('hi!');
          }}>{this.state.profile.name}</a></h1> */}
          {/* <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault();
            아래와 같이 짰더니 error가 남
            this를 찾을 수 없기 때문: event 함수 안에서의 this는 컴포넌트를 가리키지 않고
            아무 값도 세팅되어 있지 않다.
            this.state.mode = 'welcome';
            해결방법은 bind를 이용하기: 아래와 같이 함수 끝나는 직후에 bind를 붙여준다
            그러면 이 함수 안에서의 this는 해당 컴포넌트가 된다.
            this.state.mode = 'welcome';
          }.bind(this)}>{this.state.profile.name}</a></h1>
          그런데 작동이 되지 않음
          react는 코드를 이렇게 짜면 state 값 변동을 눈치채지 못함
          setState를 이용하기: 동적으로 state를 변경하는 것
            this.setState({
              mode: 'second'
            });
          }.bind(this)}>{this.state.profile.name}</a></h1> */}
          {/* // <h3>{this.state.profile.age}</h3>
        // </div> */}
        <Profile title={_title} sub={_desc}></Profile>
        <ReadContents 
          onChangePage={function(id){
            this.setState({
              mode:'second',
              selected_content_id: Number(id),
            });
          }.bind(this)}
          data={this.state.contents}></ReadContents>
        <Control
          onChangeMode={function(_mode){
            this.setState({mode:_mode})
          }.bind(this)}
        ></Control>
        <Projects></Projects>
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