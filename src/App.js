import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MainMenu from './components/MainMenu'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#990033",
    primary2Color: "#666666",
    primary3Color: "#003399",
    accent1Color: "#000000",
    accent2Color: "#ED2B2B",
    accent3Color: "#F58C8C"
  }
});


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_menu: 'main',
    };
  }

  render_main_menu() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
      
          <MainMenu />
    
        </div>
      </MuiThemeProvider>
    );
  }

  render() {
    let { current_menu } = this.state;
    if (current_menu === 'main'){
      return this.render_main_menu();
    }
  }
}

export default App;
