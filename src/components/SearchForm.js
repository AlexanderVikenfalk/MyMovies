import React, { Component } from 'react';

class SearchForm extends Component {
  state = {
    data: [],
    searchTerm: '' //value={this.state.searchTerm}
  }

  onChange = e => this.setState({[e.target.name] : e.target.value})

  render() {

    const { searchTerm, data } = this.state; 
  

    const list = data.map((item, index) => {
     
      if(searchTerm){
       
        return item.title.includes(searchTerm) ? <div key={index}>{item.title} </div> : ''
      }else{
        return <div key={index}>{item.name} </div>
      }
    });
    return (
      <div className="App">
        {list} 
        <input type="text" name="searchTerm" onChange={this.onChange} value={this.state.searchTerm} />
      </div>
    );
  }
}

export default SearchForm;
