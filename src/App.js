import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer.js'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { addDownload } from './actions';
import store from "./store/index";
import axios from 'axios'
const theme = createMuiTheme({
  palette: {
    type: 'light', // Switching the dark mode on is a single property value change.
  },
});



// setInterval(() => {
//       axios.get('/testData.json')
//       .then(function (response) {
       
//       response.data.forEach(element => {
//         store.dispatch( addDownload(element));
//       });
     
//         console.log(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }, 5000);
// http://192.168.2.27/
// synologydownloadlist2
// /php/downloadviewerapp.php
// ?action=getdownloads
// &token=jXGTeIe5sFcfM1490MIN733206
//const store = createStore(rootReducer);

// store.subscribe(() => console.log('Look ma, Redux!!'));


let fetch = function(){
  let url = "http://192.168.2.27/synologydownloadlist2/php/downloadviewerapp.php";
  let params = {
    action: "getdownloads",
    token: "jXGTeIe5sFcfM1490MIN733206"
  }
  return axios.get(url, { params: params })
    .then(function (response) {
      return response.data.data.tasks.map((value)=>{
 
        return {
          name: value.title,
          data: {
            total: 20,
            progress: Math.round((value.additional.transfer.size_downloaded / value.size) * 100)
          }
        };
      });
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
      return "jjjjj";
    });
}
class App extends Component {
  componentWillReceiveProps(nextProps){

  }
  componentWillMount(){
    fetch().then((result)=>{
  
      result
        .sort( (a, b) => {
  
          return b.data.progress - a.data.progress ;
        })
        .forEach( (item) => { store.dispatch( addDownload(item)); })
        
    });
  }
  componentWillUnmount(){

  }
  startPoll(){

  }
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <MainContainer></MainContainer>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;