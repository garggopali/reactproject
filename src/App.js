import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './Listitems';
// installed icons using npm in terminal and now importing that paxkage
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);
// Class component
class App extends React.Component{
  constructor(props){
    //base class
    super(props);
// define state
    this.state={
  // 1 statey
      items:[],
      // 2nd state
  currentItem:{
    text:'',
    key:''
  }
  }
  this.handleInput=this.handleInput.bind(this);
  this.addItem=this.addItem.bind(this);
  this.deleteItem= this.deleteItem.bind(this);
  this.setUpdate= this.setUpdate.bind(this);
}
  // 1 add items to the list
  // 2 delete items from the list
  // add items in the list, tere is 2 methods - 1st handle input mathod and 2nd add item methos
  handleInput(e){
    // to change the state variable we need to use det state method
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }
  // 2nd method add item method
addItem(e){
  e.preventDefault();  // when button clicked then stop page load
  const newItem=this.state.currentItem;
  console.log(newItem);
  if(newItem.text!==""){
    const newItems=[...this.state.items,newItem];
    this.setState({
      items:newItems,
    currentItem:{
      text:'',
      key:''
    }
  })
  }
}
  deleteItem(key){
    const filteredItems =this.state.items.filter(item => 
      item.key!==key);
      this.setState({
        items:filteredItems
      })
  }
setUpdate(text,key){
  const items=this.state.items;
  items.map(item =>{
    if(item.key===key){
      item.text=text;
    }
  })
  this.setState({
  items:items
})
}
render(){
  return (
    <div className="App">
      <header>
      <p className="Header">
      To do list
      </p>
<form id="to-do-form" onSubmit={this.addItem}>
      <input type="text" placeholder="Enter Text"
      value={this.state.currentItem.text}
      onChange={this.handleInput}/>
      <button type="submit">Add</button> 
      </form>     
    </header>
    <ListItems items={this.state.items}
    deleteItem ={this.deleteItem}
    setUpdate={this.setUpdate}></ListItems>
    
    </div>
  );
}
}

export default App;
