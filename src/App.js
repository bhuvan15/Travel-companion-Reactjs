import './App.css';
import React from 'react';
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

/* Materail UI */
import {CssBaseline, Grid} from '@material-ui/core'



function App() {
  return (
    <div className="App">
      {/* CSSBaseLine removes basics styles*/}
      <CssBaseline />
      {/* Header */}
      <Header/>
      {/* Body Grid */}
      <Grid container spacing = {3} style = {{width: '100%'}} >
          
          {/* xs and md are the breakpoints for space taken on small devices */}

          {/* List */}
          <Grid item xs={12} md = {4}>
            <List />
          </Grid>
          
          {/* Map */}
          <Grid item xs={12} md = {8}>
            <Map />
          </Grid>
      </Grid>
    </div>
  );
}

export default App;
