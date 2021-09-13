import React, { Component } from 'react';
import { Box, Text, Anchor, Paragraph, ResponsiveContext, Button } from 'grommet';
import { isMacOs } from 'react-device-detect';
import { DownloadOption, PhoneVertical } from 'grommet-icons';

class HomePage extends Component {
  render() {
    return (
      <ResponsiveContext.Consumer>
        { size => (
          <Box flex='grow' align='center' justify='center' pad='medium' >
            <Text color='appBarBackground' weight='700' size={ (size == 'medium' || size == 'large' || size == 'xlarge' ) ? '850%' : '500%'} margin={{left: '20pt', bottom: 'none' }} >Linkly</Text>
            <Text color='appBarBackground' textAlign='center' weight='600' size='200%'>Simple and Convenient Menu Bar Link Manager</Text>
            { isMacOs ? (
              <Button fill='horizontal' href='https://api.halz.dev/files/Linkly.zip' target='_blank'>
                <Box background='#5e5ce6' direction='column' align='center' margin='large' pad="medium" round='medium'>
                  <Box align='center' direction='row' pad='xsmall' gap='small'>
                    <Text weight='bold' size='150%'>Download Now</Text>
                    <DownloadOption />
                  </Box>
                  <Text size='70%'>Supports MacOS 11.0 or Higher</Text>
                </Box>
              </Button>
            ) : (
              <Box background='#5e5ce6' direction='column' align='center' margin='large' pad="medium" round='medium'>
                  <Box align='center' direction='row' pad='xsmall' gap='small'>
                    <Text weight='bold' size='150%'>I'm sorry, you can't download Linkly</Text>
                    <PhoneVertical />
                  </Box>
                  <Text size='70%'>Visit page on a Mac device to download Linkly</Text>
                  <Anchor href="https://api.halz.dev/files/Linkly.zip" size='50%' color='white' style={{ textDecoration: 'underline'}}>Seeing this in error? Download anyway</Anchor>
                </Box>
            )}
            <Text color='appBarBackground' textAlign='center' weight='600' size='200%'>About Linkly</Text>
            <Box align='center' gap='medium'>
              <Text>Linkly is a menu bar utility to help you organize your links, designed for Mac, and built to make your life simpler, and faster.</Text>
              <Box pad='medium' align='start'>
                <Text>- Easily add new links, and access them any time with colorful ease</Text>
                <Text>- Open links in your favorite browser</Text>
                <Text>- Automatically open the app on computer launch, low memory, and no power impacts</Text>
              </Box>
              <Text weight='600' size='120%'>Support?</Text>
              <Text>Linkly supports any version of macOS Big Sur(11.0) or higher, on any device</Text>
              <Text weight='600' size='120%'>Opensource?</Text>
              <Text>You bet! The <a color="#5e5ce6" href="https://github.com/ha1lie/Linkly" target="_blank" style={{ textDecoration: 'none'}}>App</a> and the <a color="#5e5ce6" href="https://github.com/ha1lie/linkly-halz-dev" target="_blank" style={{ textDecoration: 'none'}}>Website</a> are both opensource on GitHub! Give them some stars!</Text>
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