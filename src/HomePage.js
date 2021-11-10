import React, { Component } from 'react';
import { Box, Text, Anchor, Spinner, ResponsiveContext, Button } from 'grommet';
import { isMacOs } from 'react-device-detect';
import { DownloadOption, PhoneVertical, Close } from 'grommet-icons';

class HomePage extends Component {

  async fetchOnline() {
    let maintenence = true
    await fetch("https://api.halz.dev/linkly/isMaintenence", {
      method: 'GET'
    }).then(function(res) {
      return res.text()
    }).then(function(text) {
      maintenence = text === "NO" //FIX ME
    })
    this.setState({isDown: maintenence})
  }

  async fetchCount() {
    let tmpCount = ""
    await fetch("https://api.halz.dev/linkly/count", {
      method: 'GET'
    }).then(function(res) {
      return res.text()
    }).then(function(text) {
      tmpCount = text
    })
    console.log("THIS IS TMP COUNT:")
    console.log(tmpCount)
    this.setState({count: tmpCount})
  }

  async downloadLinkly() {
    this.setState({loadingDownload: true})
    await fetch("https://api.halz.dev/linkly/download", {
      method: 'GET'
    }).then(function(res) {
      return res.text()
    }).then(function(url) {
      window.open(url)
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      isDown: null,
      count: "",
      loadingDownload: false
    }
    this.fetchOnline()
    this.fetchCount()
  }

  render() {
    return (
      <ResponsiveContext.Consumer>
        { size => (
          <Box flex='grow' align='center' justify='center' pad='medium' >
            <Text color='appBarBackground' weight='700' size={ (size === 'medium' || size === 'large' || size === 'xlarge' ) ? '850%' : '500%'} margin={{left: '20pt', bottom: 'none' }} >Linkly</Text>
            <Text color='appBarBackground' textAlign='center' weight='600' size='200%'>Simple and Convenient Menu Bar Link Manager</Text>
            {
              this.state.loadingDownload ? (
                <Box align='center' fill='horizontal' margin={{ horizontal: 'large', vertical: 'small'}} background='#5e5ce6' pad='medium' round='medium'>
                  <Box>
                    <Box direction='row' justify='between' align='center' margin='small'>
                      <Box direction='row' align='center' gap='medium'>
                        <Spinner color='white' size='medium' />
                        <Text weight='700' size='125%' >Downloading...</Text>
                      </Box>
                      <Close onClick={ () => { this.setState({ loadingDownload: false }) } } />
                    </Box>
                    <Box>
                      <Text weight='600' size='120%'>To install Linkly:</Text>
                      <Text>1. Open zip file</Text>
                      <Text>2. Drag Linkly to your Applications folder</Text>
                      <Text>3. Open Linkly once, and never worry about it again!</Text>
                    </Box>
                  </Box>
                </Box>
              ) : (
                this.state.isDown === null ? (
                  <Spinner color='#5e5ce6' size='medium' />
                ) : ((this.state.isDown) ? (
                  <Box fill='horizontal' margin={{ horizontal: 'large', vertical: 'small'}} align='center' background='#5e5ce6' round='medium' pad='medium'>
                    <Box>
                      <Text weight='700' size='150%'>I'm sorry,</Text>
                      <Text>Our backend server is offline for maintenence right now, please come back to download linkly soon!</Text>
                    </Box>
                  </Box>
                ) : (
                  isMacOs ? (
                    <Button margin={{ horizontal: 'large', vertical: 'small'}} onClick={ () => { this.downloadLinkly() } } fill='horizontal'>
                      <Box background='#5e5ce6' direction='column' align='center' pad="medium" round='medium'>
                        <Box align='center' direction='row' pad='xsmall' gap='small'>
                          <Text weight='bold' size='150%'>Download Now</Text>
                          <DownloadOption />
                        </Box>
                        <Text size='70%'>Supports MacOS 11.0 or Higher</Text>
                      </Box>
                    </Button>
                  ) : (
                    <Box background='#5e5ce6' margin={{ horizontal: 'large', vertical: 'small'}} direction='column' align='center' pad="medium" round='medium'>
                      <Box align='center' direction='row' pad='xsmall' gap='small'>
                        <Text weight='bold' size='150%'>I'm sorry, you can't download Linkly</Text>
                        <PhoneVertical />
                      </Box>
                      <Text size='70%'>Visit page on a Mac device to download Linkly</Text>
                      <Anchor onClick= { () => { this.downloadLinkly() } } size='50%' color='white' style={{ textDecoration: 'underline'}}>Seeing this in error? Download anyway</Anchor>
                    </Box>
                  )
                ))
              )
            }
            <Box align='center' gap='small'>
              { this.state.count !== "" ? (
                <Box>
                  <Text>Join {this.state.count} other people using Linkly</Text>
                </Box>
              ) : (
                <Box>
                </Box>
              )}
              <Text color='appBarBackground' textAlign='center' weight='600' size='200%'>About Linkly</Text>
              <Text>Linkly is a menu bar utility to help you organize your links, designed for Mac, and built to make your life simpler, and faster.</Text>
              <Box pad='medium' align='start'>
                <Text>- Easily add new links, and access them any time with colorful ease</Text>
                <Text>- Open links in your favorite browser</Text>
                <Text>- Automatically open the app on computer launch, low memory, and no power impacts</Text>
              </Box>
              <Text weight='600' size='120%'>Support?</Text>
              <Text>Linkly supports any version of macOS Big Sur(11.0) or higher, on any device</Text>
              <Text weight='600' size='120%'>Opensource?</Text>
              <Text>You bet! The <a color="#5e5ce6" href="https://github.com/ha1lie/Linkly" target="_blank" rel="noreferrer" style={{ textDecoration: 'none'}}>App</a> and the <a color="#5e5ce6" href="https://github.com/ha1lie/linkly-halz-dev" target="_blank" rel='noreferrer' style={{ textDecoration: 'none'}}>Website</a> are both opensource on GitHub! Give them some stars!</Text>
              <Text weight='600' size='120%'>Questions?</Text>
              <Text>Contact Hallie <a color="#5e5ce6" href="/contact" target="_self" style={{ textDecoration: 'none'}}>HERE</a></Text>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default HomePage;