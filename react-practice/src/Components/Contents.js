import React, { Component } from "react"

class Contents extends Component {
    render() {
      const data = this.props.data;
      var lists = []
      var i = 0;
      while (i < data.length){
        lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/"+ data[i].id}
            onClick={function(e){
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}
          >{data[i].title}: {data[i].desc}
          </a>
        </li>)
        i += 1;
      }
      return (
        <div>
          { lists }
        </div>
      )
    }
  }

export default Contents