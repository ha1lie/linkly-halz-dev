import React from 'react';
import { Box, Text, Anchor, Paragraph, ResponsiveContext } from 'grommet';

function HomePage() {
  return (
    <ResponsiveContext.Consumer>
      { size => (
        <Box flex='grow' align='center' justify='center' >
          <Box>
            <Text color='appBarBackground' weight='700' size='1000%' margin={{left: '20pt', bottom: 'none' }} >Flip</Text>
            <Text color='appBarBackground' weight='600' size='200%'>A simple PDF Utility</Text>
          </Box>
          <Box flex='grow' direction='row' pad='large' gap='large' style={{ overflow: 'scroll' }} >
            <Box round='medium' width={ ( size === 'small' || size === 'xsmall' ) ? '80vw' : '500px'} height={ ( size === 'small' || size === 'xsmall' ) ? '107vw' : '667px'} flex='grow' background="url('/simpleStart.png')" />
            <Box round='medium' width={ ( size === 'small' || size === 'xsmall' ) ? '80vw' : '500px'} height={ ( size === 'small' || size === 'xsmall' ) ? '107vw' : '667px'}  flex='grow' background="url('/rotateImage.png')" />
            <Box round='medium' width={ ( size === 'small' || size === 'xsmall' ) ? '80vw' : '500px'} height={ ( size === 'small' || size === 'xsmall' ) ? '107vw' : '667px'}  flex='grow' background="url('/scanImage.png')" />
          </Box>
          <Box align='center' gap='medium' pad='medium'>
            <Text>Flip is a PDF utility meant to allow users to quickly create and manage the rotation of their PDF files on their iPad. Developed with a focus on ease of use, Flip allows you to:</Text>
            <Box pad='medium' align='start'>
              <Text>- Scan and create PDF documents with the most ease on the App Store</Text>
              <Text>- Rotate skewed PDFs</Text>
              <Text>- Export and share PDFs with custom file names, any way that you would like!</Text>
            </Box>
            <Text weight='600' size='120%'>BUILT FOR STUDENTS</Text>
            <Text>Built with students in mind, Flip allows you to share and create digital versions of all of your worksheets and projects, to store and collaborate any way that you would like!</Text>
            <Text weight='600' size='120%'>BUILT FOR PROFESSIONALS</Text>
            <Text>Built for the modern day professional, Flip allows you to utilize your iPad to move your workflow into the digital realm, bringing piles of hoarded paper to a simple and easy to use digital file in seconds!</Text>
            <Text weight='600' size='120%'>BUILT FOR YOU</Text>
            <Text>Flip was built for you, with a simple but straightforward design and workflow, allowing you to get more done, faster.</Text>
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
}

export default HomePage;