import React, { Component } from 'react';
import Information from './DummyData.js';

class SearchBar extends Component {

  constructor(){
    super();

    this.state={
      search:null
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render(){
    const styleInfo = {
      paddingRight:'10px'
    }
    const elementStyle ={
      border:'solid',
      borderRadius:'10px',
      position:'relative',
      left:'10vh',
      height:'4vh',
      width:'40vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }
    const items = Information.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.firstName.toLowerCase().includes(this.state.search.toLowerCase()) 
        || data.lastName.toLowerCase().includes(this.state.search.toLowerCase())
        || data.positionTitle.toLowerCase().includes(this.state.search.toLowerCase())
        || data.email.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      return(
      <div>
        <ul>
          <li style={{position:'relative',left:'10vh'}}>
            <span style={styleInfo}>{data.firstName} {data.lastName}</span>
            <span style={styleInfo}>{data.positionTitle}</span>
            <span style={styleInfo}>{data.email}</span>
          </li>
        </ul>
      </div>
      )
    })

    return (
      <div>
      <input type="text" placeholder="Search for person" style= {elementStyle} onChange={(e)=>this.searchSpace(e)} />
      {items}
      </div>
    )
  }
}

export default SearchBar