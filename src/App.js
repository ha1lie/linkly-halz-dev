import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Anchor, Box, Grommet, } from 'grommet';
import AppBar from './components/AppBar';
import UnknownPage from './UnknownPage';
import PrivacyPage from './PrivacyPage';
import ContactPage from './ContactPage';
import HomePage from './HomePage';

const theme = {
  global: {
    focus: {
      shadow: {
        size: '0px'
      },
      outline: {
        size: '2px',
        color: 'rubyPink',
        radius: '10px'
      },
    },
    textArea: {
      extend: {
        color: 'purple'
      },
    },
    colors: {
      background: 'appBarTextColor',
      placeholder: 'offwhite',
      border: 'white',
      appBarTextColor: 'offwhite',
      appBarBackground: 'charcoal',
      violetPurple: '#ffffff',
      rubyPink: '#F15156',
      polishedPine: '#C96480',
      offwhite: '#ffffff',
      charcoal: '#5e5ce6',
      nearBlack: '#17171A',
      eppeline: '#F7F1ED',
      linkColor: '#266DD3',
      offlineColor: '#0A2463',
      onlineColor: '#44FFD1',
      idleColor: '#FFE66D',
      DoNotDisturbColor: '#FE4A49',
    },
    font: {
      family: 'Nunito',
      size: '18px',
      height: '20px',
    },
  },
  heading: {
    level: {
      '4': {
        color: '#ff0000',
        font: {
          weight: '200'
        }
      }
    }
  }
};

class App extends Component {
  render() {
    return (
      <Grommet theme={ theme }>
        <Router>
          <Box flex='grow' direction='column'>
            <AppBar />
            <Box margin={{ top: '60px' }} >
              <Box flex='grow' >
                <Switch>
                  <Route path='/contact' exact>
                    <ContactPage />
                  </Route>
                  <Route path='/privacy' exact>
                    <PrivacyPage />
                  </Route>
                  <Route path='/' exact> 
                    <HomePage />
                  </Route>
                  <Route path='/'>
                    <UnknownPage />
                  </Route>
                </Switch>
              </Box>
            </Box>
            <Box background='appBarBackground' justify='center' align='center' height ='60pt'> { /* Footer to go back to my website */}
              <Anchor href='https://hey.halz.dev/' color='appBarTextColor' label='[ Go To My Portfolio ]' />
            </Box>
          </Box>
        </Router>
      </Grommet>
    );
  }
}


export default App;
