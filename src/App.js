import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer.js'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { addDownload, addNetwork } from './actions';
import store from "./store/index";
import axios from 'axios'
const theme = createMuiTheme({
  palette: {
    type: 'light', // Switching the dark mode on is a single property value change.
  },
});

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
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
}

class App extends Component {
  componentWillReceiveProps(nextProps){

  }
  componentWillMount(){
    this.startPoll();
  }
  componentWillUnmount(){

  }
  startPoll(){
    var promise = fetch();
    promise.then((result)=>{
      let dataResults = result.data.tasks.map((value)=>{
        return {
          id: value.id,
          name: value.title,
          data: {
            total: ((value.additional.transfer.speed_download) / 1000).toFixed(2) + " MB/s "  + (((value.additional.transfer.size_downloaded) / 1024)/1024).toFixed(2),
            progress: Math.round((value.additional.transfer.size_downloaded / value.size) * 100)
          }
        };
      }).sort(function(objA, objB) {
				// objA and objB - are the objects which need to be compared
				return objA.progress > objB.progress ? -1 : 1;
			}, "asc");
      store.dispatch( addDownload(dataResults) );
    });
    promise.then((result)=>{
      let upload = 0;
      let download = 0;
      result.data.tasks.forEach((value) => {
        download += value.additional.transfer.speed_download;
        upload += value.additional.transfer.speed_upload;
      });
      store.dispatch( addNetwork({
          download: download,
          upload: upload
        })
      ); 
    });
    promise.then((result)=>{

    });
    setTimeout(this.startPoll.bind(this), 3000)
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